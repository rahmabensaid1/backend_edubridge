import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Dossier } from "../entities/dossier.entity";
import { Document } from "../entities/document.entity";
import { CreateDossier } from "../interfaces/dossier.interface";
import { NotificationService } from "./notification.service";

export class DossierService {
  private dossierRepo: Repository<Dossier>;
  private documentRepo: Repository<Document>;
  private notificationService: NotificationService;

  constructor() {
    this.dossierRepo = AppDataSource.getRepository(Dossier);
    this.documentRepo = AppDataSource.getRepository(Document);
    this.notificationService = new NotificationService();
  }

  private calculateCompletionScore(data: any, documents: any[] = []): number {
    const requiredFields = [
      "fullName",
      "sex",
      "phoneCountryCode",
      "phone",
      "nationality",
      "lastDiploma",
      "motivation"
    ];
    const filledFields = requiredFields.filter((field) =>
      String(data[field] || "").trim()
    ).length;
    const requiredDocuments = ["Passeport ou CIN", "Dernier diplôme", "Relevé de notes", "Lettre de motivation"];
    const uploadedRequiredDocuments = requiredDocuments.filter((label) =>
      documents.some((document) => document.type === label && document.urlStockage)
    ).length;

    return Math.round(
      ((filledFields + uploadedRequiredDocuments) /
        (requiredFields.length + requiredDocuments.length)) *
        100
    );
  }

  async createDossierService(data: CreateDossier): Promise<Dossier> {
    const documents = (data as any).documents || [];
    const completionScore = this.calculateCompletionScore(data, documents);

    if (completionScore < 100) {
      throw new Error("Le dossier doit être complet avant la soumission.");
    }

    const dossier: Dossier = this.dossierRepo.create({
      ...data,
      documents: undefined,
      nom: (data as any).nom || (data as any).fullName || "Application dossier",
      description: (data as any).description || (data as any).motivation || "Formation application",
      dateDepot: (data as any).dateDepot || new Date(),
      priorite: (data as any).priorite || "normal",
      status: (data as any).status || "PENDING",
      motif: (data as any).motif || "",
      completionScore,
      user: (data as any).user,
      formation: (data as any).formation
    });
    const savedDossier = await this.dossierRepo.save(dossier);

    for (const documentData of documents) {
      const document = this.documentRepo.create({
        ...documentData,
        user: (data as any).user,
        dossier: savedDossier
      });

      await this.documentRepo.save(document);
    }

    return await this.getDossierByIdService(savedDossier.id) as Dossier;
  }

  async getDossiersService(): Promise<Dossier[]> {
    return await this.dossierRepo.find({
      relations: ["user", "formation", "formation.institution", "documents"],
      order: { createdAt: "DESC" }
    });
  }

  async getDossierByIdService(id: number): Promise<Dossier | null> {
    return await this.dossierRepo.findOne({
      where: { id },
      relations: ["user", "formation", "formation.institution", "documents"]
    });
  }

  async updateDossierService(id: number, data: Partial<CreateDossier>): Promise<Dossier | null> {
    await this.dossierRepo.update(id, data);
    return await this.getDossierByIdService(id);
  }

  async deleteDossierService(id: number): Promise<void> {
    await this.dossierRepo.delete(id);
  }

  async updateDossierStatusService(id: number, status: string): Promise<Dossier | null> {
    const existingDossier = await this.getDossierByIdService(id);

    if (!existingDossier) {
      return null;
    }

    if (["ACCEPTED", "REJECTED"].includes(existingDossier.status)) {
      throw new Error("Cette candidature a déjà reçu une décision finale.");
    }

    await this.dossierRepo.update(id, { status });
    const dossier = await this.getDossierByIdService(id);

    if (dossier?.user?.id && ["ACCEPTED", "REJECTED"].includes(status)) {
      const formationTitle = dossier.formation?.titre || "votre formation";
      const institutionName = dossier.formation?.institution?.nom || "l'université choisie";
      const isAccepted = status === "ACCEPTED";

      await this.notificationService.createNotificationService({
        titre: isAccepted ? "Dossier accepté" : "Dossier refusé",
        description: isAccepted
          ? `Bonne nouvelle: votre dossier pour ${formationTitle} à ${institutionName} a été accepté par l'admin.`
          : `Votre dossier pour ${formationTitle} à ${institutionName} a été refusé par l'admin.`,
        type: "DOSSIER_STATUS",
        url: "/my-applications",
        lu: false,
        receiverId: dossier.user.id
      });
    }

    return dossier;
  }
}

import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Document } from "../entities/document.entity";
import { User } from "../entities/user.entity";
import { CreateDocument } from "../interfaces/document.interface";

export class DocumentService {
  private repo: Repository<Document>;

  constructor() {
    this.repo = AppDataSource.getRepository(Document);
  }

  async createDocumentService(data: CreateDocument, user?: User): Promise<Document> {
    const document = this.repo.create({ ...data, user });
    return await this.repo.save(document);
  }

  async getDocumentsService(): Promise<Document[]> {
    return await this.repo.find({ relations: ["user", "parcours", "dossier"] });
  }

  async getMyDocumentsService(userId: number): Promise<Document[]> {
    return await this.repo.find({ where: { user: { id: userId } }, relations: ["user"] });
  }

  async getDocumentByIdService(id: number): Promise<Document | null> {
    return await this.repo.findOne({ where: { id }, relations: ["user", "parcours", "dossier"] });
  }

  async updateDocumentService(id: number, data: Partial<CreateDocument>): Promise<Document | null> {
    await this.repo.update(id, data);
    return await this.getDocumentByIdService(id);
  }

  async deleteDocumentService(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return !!result.affected;
  }
}

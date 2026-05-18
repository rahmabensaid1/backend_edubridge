import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Chatbot } from "../entities/chatbot.entity";
import { Institution } from "../entities/institution.entity";
import { Formation } from "../entities/formation.entity";
import { Profile } from "../entities/profile.entity";
import { Dossier } from "../entities/dossier.entity";
import { CreateChatbot } from "../interfaces/chatbot.interface";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export class ChatbotService {
  private repo: Repository<Chatbot>;
  private institutionRepo: Repository<Institution>;
  private formationRepo: Repository<Formation>;
  private profileRepo: Repository<Profile>;
  private dossierRepo: Repository<Dossier>;

  constructor() {
    this.repo = AppDataSource.getRepository(Chatbot);
    this.institutionRepo = AppDataSource.getRepository(Institution);
    this.formationRepo = AppDataSource.getRepository(Formation);
    this.profileRepo = AppDataSource.getRepository(Profile);
    this.dossierRepo = AppDataSource.getRepository(Dossier);
  }

  async createChatbotService(data: CreateChatbot): Promise<Chatbot> {
    const chatbot = this.repo.create(data);
    return await this.repo.save(chatbot);
  }

  async getChatbotsService(): Promise<Chatbot[]> {
    return await this.repo.find();
  }

  async deleteChatbotService(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return !!result.affected;
  }

  async askChatbotService(message: string, userId?: number): Promise<string> {
    const institutions = await this.institutionRepo.find({
      relations: ["formations"],
      take: 12
    });

    const formations = await this.formationRepo.find({
      relations: ["institution"],
      take: 20
    });

    const profile = userId
      ? await this.profileRepo.findOne({
          where: { user: { id: userId } },
          relations: ["user"]
        })
      : null;

    const dossiers = userId
      ? await this.dossierRepo.find({
          where: { user: { id: userId } },
          relations: ["formation", "formation.institution"],
          take: 5
        })
      : [];

    const appContext = {
      institutions: institutions.map((institution) => ({
        name: institution.nom,
        city: institution.ville,
        type: institution.type,
        website: institution.siteWeb,
        formations: institution.formations?.map((formation) => ({
          title: formation.titre,
          level: formation.niveauRequis,
          fees: formation.fraisInscription,
          duration: formation.duree,
          language: formation.langue
        }))
      })),
      formations: formations.map((formation) => ({
        title: formation.titre,
        description: formation.description,
        level: formation.niveauRequis,
        fees: formation.fraisInscription,
        duration: formation.duree,
        language: formation.langue,
        university: formation.institution?.nom
      })),
      profile,
      dossiers: dossiers.map((dossier) => ({
        status: dossier.status,
        formation: dossier.formation?.titre,
        university: dossier.formation?.institution?.nom
      }))
    };

    const systemPrompt = `
You are TuniBridge AI Assistant.

You help international students who want to study in Tunisia.

You can answer about:
- Tunisian universities
- formations/programs
- admission procedures
- documents needed for applications
- housing
- student life
- student profile
- application/dossier status

Rules:
- Answer in the same language as the user.
- Be clear and helpful.
- If the question is about the platform, explain what the student should do inside TuniBridge.
- If information is missing, say it clearly.
- Do not invent official rules. If unsure, say the student should verify with the university.
`;

    const userPrompt = `
Here is data from the TuniBridge platform:
${JSON.stringify(appContext, null, 2)}

Student question:
${message}
`;

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("Missing GEMINI_API_KEY in .env");
    }

    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        contents: [
          {
            role: "user",
            parts: [{ text: userPrompt }]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 900
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error ${response.status}: ${errorText}`);
    }

    const data: any = await response.json();
    const reply = data.candidates?.[0]?.content?.parts
      ?.map((part: any) => part.text)
      .filter(Boolean)
      .join("\n")
      .trim();

    return reply || "Sorry, I could not generate an answer.";
  }
}

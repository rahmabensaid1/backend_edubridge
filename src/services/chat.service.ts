import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Chat } from "../entities/chat.entity";
import { CreateChat } from "../interfaces/chat.interface";

export class ChatService {
  private repo: Repository<Chat>;

  constructor() {
    this.repo = AppDataSource.getRepository(Chat);
  }

  async createChatService(data: CreateChat): Promise<Chat> {
    const chat = this.repo.create({
      titre: data.titre,
      contenu: data.contenu,
      receiver: data.receiverId ? ({ id: data.receiverId } as any) : undefined,
      sender: data.senderId ? ({ id: data.senderId } as any) : undefined
    });
    return await this.repo.save(chat);
  }

  async getChatsService(): Promise<Chat[]> {
    return await this.repo.find({ relations: ["receiver", "sender"] });
  }

  async getMyChatsService(userId: number): Promise<Chat[]> {
    return await this.repo.find({
      where: [{ receiver: { id: userId } }, { sender: { id: userId } }],
      relations: ["receiver", "sender"]
    });
  }

  async deleteChatService(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return !!result.affected;
  }
}

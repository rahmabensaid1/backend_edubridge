import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Notification } from "../entities/notification.entity";
import { CreateNotification } from "../interfaces/notification.interface";

export class NotificationService {
  private repo: Repository<Notification>;

  constructor() {
    this.repo = AppDataSource.getRepository(Notification);
  }

  async createNotificationService(data: CreateNotification): Promise<Notification> {
    const notification = this.repo.create({
      titre: data.titre || (data as any).title,
      description: data.description || (data as any).message,
      type: data.type,
      url: data.url,
      lu: data.lu ?? (data as any).isRead,
      receiver: data.receiverId ? ({ id: data.receiverId } as any) : undefined,
      sender: data.senderId ? ({ id: data.senderId } as any) : undefined
    });
    return await this.repo.save(notification);
  }

  async getNotificationsService(): Promise<Notification[]> {
    return await this.repo.find({ relations: ["receiver", "sender"] });
  }

  async getMyNotificationsService(userId: number): Promise<Notification[]> {
    return await this.repo.find({
      where: { receiver: { id: userId } },
      relations: ["receiver", "sender"],
      order: { date: "DESC" }
    });
  }

  formatNotification(notification: Notification) {
    return {
      ...notification,
      title: notification.titre,
      message: notification.description,
      isRead: notification.lu,
      createdAt: notification.date
    };
  }

  async markAsReadService(id: number): Promise<Notification | null> {
    await this.repo.update(id, { lu: true });
    return await this.repo.findOne({ where: { id }, relations: ["receiver", "sender"] });
  }

  async deleteNotificationService(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return !!result.affected;
  }
}

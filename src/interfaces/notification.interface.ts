export interface CreateNotification {
  titre: string;
  description: string;
  type: string;
  url?: string;
  lu?: boolean;
  receiverId?: number;
  senderId?: number;
}

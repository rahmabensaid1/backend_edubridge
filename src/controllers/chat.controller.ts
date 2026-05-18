import { Request, Response } from "express";
import { ChatService } from "../services/chat.service";
import { ValidateChatSchema } from "./chat.schema";

const chatService = new ChatService();

export const createChat = async (req: any, res: Response) => {
  const result = ValidateChatSchema.safeParse({
    ...req.body,
    senderId: req.body.senderId || req.user?.id
  });

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const chat = await chatService.createChatService(result.data);
  return res.status(201).json({ message: "Chat created successfully", chat });
};

export const getChats = async (_req: Request, res: Response) => {
  const chats = await chatService.getChatsService();
  res.json(chats);
};

export const getMyChats = async (req: any, res: Response) => {
  const chats = await chatService.getMyChatsService(req.user.id);
  res.json(chats);
};

export const deleteChat = async (req: Request, res: Response) => {
  const deleted = await chatService.deleteChatService(Number(req.params.id));

  if (!deleted) {
    return res.status(404).json({ message: "Chat not found" });
  }

  res.json({ message: "Chat deleted" });
};

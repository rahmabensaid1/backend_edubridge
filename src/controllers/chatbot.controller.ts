import { Request, Response } from "express";
import { ChatbotService } from "../services/chatbot.service";
import { ValidateChatbotSchema } from "./chatbot.schema";

const chatbotService = new ChatbotService();

export const createChatbot = async (req: Request, res: Response) => {
  const result = ValidateChatbotSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const chatbot = await chatbotService.createChatbotService(result.data);
  return res.status(201).json({ message: "Chatbot created successfully", chatbot });
};

export const getChatbots = async (_req: Request, res: Response) => {
  const chatbots = await chatbotService.getChatbotsService();
  res.json(chatbots);
};

export const deleteChatbot = async (req: Request, res: Response) => {
  const deleted = await chatbotService.deleteChatbotService(Number(req.params.id));

  if (!deleted) {
    return res.status(404).json({ message: "Chatbot not found" });
  }

  res.json({ message: "Chatbot deleted" });
};

export const askChatbot = async (req: Request, res: Response) => {
  try {
    const { message, userId } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    const reply = await chatbotService.askChatbotService(message, userId);

    return res.status(200).json({
      message: "Chatbot response generated successfully",
      reply
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error while generating chatbot response",
      error: error.message
    });
  }
};
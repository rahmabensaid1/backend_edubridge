import { Router } from "express";
import {
  createChatbot,
  getChatbots,
  deleteChatbot,
  askChatbot
} from "../controllers/chatbot.controller";

const router = Router();

router.post("/", createChatbot);
router.get("/", getChatbots);
router.delete("/:id", deleteChatbot);
router.post("/ask", askChatbot);
export default router;

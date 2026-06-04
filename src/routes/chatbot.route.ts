import { Router } from "express";
import {
  createChatbot,
  getChatbots,
  deleteChatbot,
  askChatbot,
  updateChatbot
} from "../controllers/chatbot.controller";

const router = Router();

router.post("/", createChatbot);
router.get("/", getChatbots);
router.put("/:id", updateChatbot);
router.delete("/:id", deleteChatbot);
router.post("/ask", askChatbot);
export default router;

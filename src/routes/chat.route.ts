import { Router } from "express";
import {
  createChat,
  getChats,
  getMyChats,
  deleteChat
} from "../controllers/chat.controller";

const router = Router();

router.post("/", createChat);
router.get("/", getChats);
router.get("/me", getMyChats);
router.delete("/:id", deleteChat);

export default router;

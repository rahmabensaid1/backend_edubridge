import { Router } from "express";
import {
  createDocument,
  getDocuments,
  getMyDocuments,
  updateDocument,
  deleteDocument
} from "../controllers/document.controller";

const router = Router();

router.post("/", createDocument);
router.get("/", getDocuments);
router.get("/me", getMyDocuments);
router.put("/:id", updateDocument);
router.delete("/:id", deleteDocument);

export default router;

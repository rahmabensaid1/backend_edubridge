import { authMiddleware } from "../middlewares/auth.middleware";
import { Router } from "express";
import {
  createInstitution,
  getInstitutions,
  getInstitutionById,
  deleteInstitution
} from "../controllers/institution.controller";

const router = Router();

router.post("/", authMiddleware,createInstitution);
router.get("/", getInstitutions);
router.get("/:id", getInstitutionById);
router.delete("/:id", authMiddleware,deleteInstitution);

export default router;
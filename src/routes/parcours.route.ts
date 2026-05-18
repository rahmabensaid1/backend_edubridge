import { authMiddleware } from "../middlewares/auth.middleware";
import { Router } from "express";
import {
  createParcours,
  getParcours,
  getParcoursById,
  deleteParcours
} from "../controllers/parcours.controller";

const router = Router();

router.post("/",authMiddleware, createParcours);
router.get("/",authMiddleware, getParcours);
router.get("/:id", authMiddleware,getParcoursById);
router.delete("/:id", authMiddleware,deleteParcours);

export default router;
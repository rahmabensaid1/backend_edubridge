import { Router } from "express";
import {
  createDossier,
  getDossiers,
  getDossierById,
  updateDossier,
  updateDossierStatus,
  deleteDossier
} from "../controllers/dossier.controller";

const router = Router();

router.post("/", createDossier);
router.get("/", getDossiers);
router.get("/:id", getDossierById);
router.patch("/:id/status", updateDossierStatus);
router.put("/:id", updateDossier);
router.delete("/:id", deleteDossier);

export default router;

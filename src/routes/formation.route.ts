import { Router } from "express";
import {
  createFormation,
  getFormations,
  getFormationById,
  deleteFormation
} from "../controllers/formation.controller";

const router = Router();

router.post("/", createFormation);
router.get("/", getFormations);
router.get("/:id", getFormationById);
router.delete("/:id", deleteFormation);

export default router;
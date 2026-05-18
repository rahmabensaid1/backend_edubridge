import { Router } from "express";
import {
  createStatistique,
  getStatistiques,
  updateStatistique
} from "../controllers/statistique.controller";

const router = Router();

router.post("/", createStatistique);
router.get("/", getStatistiques);
router.put("/:id", updateStatistique);

export default router;

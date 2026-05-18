import { Router } from "express";
import {
  createRecommendation,
  getRecommendations,
  getMyRecommendations,
  deleteRecommendation
} from "../controllers/recommendation.controller";

const router = Router();

router.post("/", createRecommendation);
router.get("/", getRecommendations);
router.get("/me", getMyRecommendations);
router.delete("/:id", deleteRecommendation);

export default router;

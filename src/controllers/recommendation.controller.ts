import { Request, Response } from "express";
import { RecommendationService } from "../services/recommendation.service";
import { UserService } from "../services/user.service";
import { ValidateRecommendationSchema } from "./recommendation.schema";

const recommendationService = new RecommendationService();
const userService = new UserService();

export const createRecommendation = async (req: any, res: Response) => {
  const result = ValidateRecommendationSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const user = req.user?.id ? await userService.getUserByIdService(req.user.id) : undefined;
  const recommendation = await recommendationService.createRecommendationService(result.data, user || undefined);
  return res.status(201).json({ message: "Recommendation created successfully", recommendation });
};

export const getRecommendations = async (_req: Request, res: Response) => {
  const recommendations = await recommendationService.getRecommendationsService();
  res.json(recommendations);
};

export const getMyRecommendations = async (req: any, res: Response) => {
  const recommendations = await recommendationService.getMyRecommendationsService(req.user.id);
  res.json(recommendations);
};

export const deleteRecommendation = async (req: Request, res: Response) => {
  const deleted = await recommendationService.deleteRecommendationService(Number(req.params.id));

  if (!deleted) {
    return res.status(404).json({ message: "Recommendation not found" });
  }

  res.json({ message: "Recommendation deleted" });
};

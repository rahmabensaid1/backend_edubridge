import { z } from "zod";

export const ValidateRecommendationSchema = z.object({
  titre: z.string().min(2),
  description: z.string().min(2),
  field: z.string().optional(),
  score: z.number().optional()
});

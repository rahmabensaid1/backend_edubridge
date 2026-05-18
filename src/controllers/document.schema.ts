import { z } from "zod";

export const ValidateDocumentSchema = z.object({
  nom: z.string().min(2),
  type: z.string().min(2),
  urlStockage: z.string().min(1),
  taille: z.string().optional(),
  description: z.string().optional()
});

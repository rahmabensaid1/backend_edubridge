import { z } from "zod";

export const ValidateDossierSchema = z.object({
  nom: z.string().optional(),
  description: z.string().optional(),
  dateDepot: z.string().optional(),
  dateRecu: z.string().optional(),
  priorite: z.string().optional(),
  status: z.string().optional(),
  motif: z.string().optional(),
  fullName: z.string().optional(),
  phone: z.string().optional(),
  phoneCountryCode: z.string().optional(),
  sex: z.string().optional(),
  nationality: z.string().optional(),
  lastDiploma: z.string().optional(),
  motivation: z.string().optional(),
  completionScore: z.number().optional(),
  user: z.object({ id: z.number() }).optional(),
  formation: z.object({ id: z.number() }).optional(),
  documents: z.array(z.object({
    nom: z.string(),
    type: z.string(),
    urlStockage: z.string(),
    taille: z.string().optional(),
    description: z.string().optional()
  })).optional()
});

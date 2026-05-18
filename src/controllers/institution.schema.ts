import { z } from "zod";

export const ValidateInstitutionSchema = z.object({
  nom: z.string().min(2),
  ville: z.string().min(2),
  siteWeb: z.string().optional(),
  email: z.string().email(),
  type: z.string(),
  pays: z.string(),
  logo: z.string().optional()
});
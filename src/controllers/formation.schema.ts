import { z } from "zod";

export const ValidateFormationSchema = z.object({
  titre: z.string().min(2),
  description: z.string().min(5),
  niveauRequis: z.string(),
  fraisInscription: z.number().min(0),
  duree: z.string(),
  langue: z.string()
});
import { z } from "zod";

export const ValidateParcoursSchema = z.object({
  diplome: z.string().min(2),
  typeDiplome: z.string().min(2),
  description: z.string().min(5),
  field: z.string().min(2),
  startDate: z.string(),
  endDate: z.string(),
  moyenne: z.number().min(0).max(20),
  langue: z.string().min(2),
});
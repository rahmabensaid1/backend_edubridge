import { z } from "zod";

export const ValidateEventSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
  location: z.string(),
  date: z.string(),
  type: z.string(),
  capaciteMax: z.number().positive()
});
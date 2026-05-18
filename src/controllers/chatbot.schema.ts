import { z } from "zod";

export const ValidateChatbotSchema = z.object({
  nom: z.string().min(2),
  modele: z.string().min(2),
  langue: z.string().min(2)
});

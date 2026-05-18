import { z } from "zod";

export const ValidateChatSchema = z.object({
  titre: z.string().optional(),
  contenu: z.string().min(1),
  receiverId: z.number().optional(),
  senderId: z.number().optional()
});

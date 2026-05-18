import { z } from "zod";

export const ValidateNotificationSchema = z.object({
  titre: z.string().min(2),
  description: z.string().min(2),
  type: z.string().min(2),
  url: z.string().optional(),
  lu: z.boolean().optional(),
  receiverId: z.number().optional(),
  senderId: z.number().optional()
});

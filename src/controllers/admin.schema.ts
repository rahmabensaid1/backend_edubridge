import { z } from "zod";

export const ValidateAdminSchema = z.object({
  department: z.string().optional(),
  canManageUsers: z.boolean().optional(),
  canManageEvents: z.boolean().optional(),
  canManageInstitutions: z.boolean().optional()
});

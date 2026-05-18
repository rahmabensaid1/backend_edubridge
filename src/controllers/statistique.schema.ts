import { z } from "zod";

export const ValidateStatistiqueSchema = z.object({
  nombreUtilisateurs: z.number().optional(),
  nombreInstitutions: z.number().optional(),
  nombreFormations: z.number().optional(),
  nombreDossiers: z.number().optional()
});

import { Request, Response } from "express";
import { StatistiqueService } from "../services/statistique.service";
import { ValidateStatistiqueSchema } from "./statistique.schema";

const statistiqueService = new StatistiqueService();

export const createStatistique = async (req: Request, res: Response) => {
  const result = ValidateStatistiqueSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const statistique = await statistiqueService.createStatistiqueService(result.data);
  return res.status(201).json({ message: "Statistique created successfully", statistique });
};

export const getStatistiques = async (_req: Request, res: Response) => {
  const statistiques = await statistiqueService.getStatistiquesService();
  res.json(statistiques);
};

export const updateStatistique = async (req: Request, res: Response) => {
  const result = ValidateStatistiqueSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const updated = await statistiqueService.updateStatistiqueService(Number(req.params.id), result.data);

  if (!updated) {
    return res.status(404).json({ message: "Statistique not found" });
  }

  res.json({ message: "Statistique updated", updated });
};

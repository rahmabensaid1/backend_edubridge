import { Request, Response } from "express";
import { DossierService } from "../services/dossier.service";
import { ValidateDossierSchema } from "./dossier.schema";

const dossierService = new DossierService();

export const createDossier = async (req: Request, res: Response) => {
  try {
    const result = ValidateDossierSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message
      });
    }

    const dossier = await dossierService.createDossierService(req.body);

    return res.status(201).json({
      message: "Dossier created successfully",
      dossier
    });

  } catch (error: any) {
    return res.status(500).json({
      message: "Error creating dossier",
      error: error.message
    });
  }
};

export const getDossiers = async (_req: Request, res: Response) => {
  const dossiers = await dossierService.getDossiersService();
  res.json(dossiers);
};

export const getDossierById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const dossier = await dossierService.getDossierByIdService(id);

  if (!dossier) {
    return res.status(404).json({ message: "Dossier not found" });
  }

  res.json(dossier);
};

export const updateDossier = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = await dossierService.updateDossierService(id, req.body);

  res.json({
    message: "Dossier updated",
    updated
  });
};

export const updateDossierStatus = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  try {
    const updated = await dossierService.updateDossierStatusService(id, status);

    if (!updated) {
      return res.status(404).json({ message: "Dossier not found" });
    }

    res.json({
      message: "Dossier status updated",
      updated
    });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteDossier = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await dossierService.deleteDossierService(id);

  res.json({
    message: "Dossier deleted"
  });
};

import { Request, Response } from "express";
import { FormationService } from "../services/formation.service";
import { ValidateFormationSchema } from "./formation.schema";

const formationService = new FormationService();

// CREATE
export const createFormation = async (req: Request, res: Response) => {
  try {
    const result = ValidateFormationSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message
      });
    }

    const formation = await formationService.createFormationService(req.body);

    return res.status(201).json({
      message: "Formation created successfully",
      formation
    });

  } catch (error: any) {
    return res.status(500).json({
      message: "Error while creating formation",
      error: error.message
    });
  }
};

// GET ALL
export const getFormations = async (_req: Request, res: Response) => {
  try {
    const formations = await formationService.getFormationsService();

    return res.status(200).json(formations);
  } catch (error: any) {
    return res.status(500).json({
      message: "Error while fetching formations",
      error: error.message
    });
  }
};

// GET BY ID
export const getFormationById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const formation = await formationService.getFormationByIdService(id);

    if (!formation) {
      return res.status(404).json({ message: "Formation not found" });
    }

    return res.status(200).json(formation);
  } catch (error: any) {
    return res.status(500).json({
      message: "Error while fetching formation",
      error: error.message
    });
  }
};

// DELETE
export const deleteFormation = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const deleted = await formationService.deleteFormationService(id);

    if (!deleted) {
      return res.status(404).json({ message: "Formation not found" });
    }

    return res.status(200).json({
      message: "Formation deleted successfully"
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error while deleting formation",
      error: error.message
    });
  }
};
import { Request, Response } from "express";
import { InstitutionService } from "../services/institution.service";
import { ValidateInstitutionSchema } from "./institution.schema";

const service = new InstitutionService();

// CREATE
export const createInstitution = async (req: Request, res: Response) => {
  try {
    const parsed = ValidateInstitutionSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: parsed.error.issues[0].message
      });
    }

    const institution = await service.create(parsed.data);

    return res.status(201).json({
      message: "Institution created",
      institution
    });

  } catch (err: any) {
    return res.status(500).json({
      message: "Error creating institution",
      error: err.message
    });
  }
};

// GET ALL
export const getInstitutions = async (_req: Request, res: Response) => {
  const data = await service.getAll();
  return res.json(data);
};

// GET ONE
export const getInstitutionById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = await service.getById(id);

  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.json(data);
};

// DELETE
export const deleteInstitution = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await service.delete(id);

  if (!deleted) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.json({ message: "Deleted successfully" });
};
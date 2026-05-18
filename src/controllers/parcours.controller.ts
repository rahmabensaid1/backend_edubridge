import { Request, Response } from "express";
import { ParcoursService } from "../services/parcours.service";
import { ValidateParcoursSchema } from "./parcours.schema";
import { UserService } from "../services/user.service";


const userService = new UserService();
const parcoursService = new ParcoursService();


export const createParcours = async (req: any, res: Response) => {
  console.log("UseerId",req.user) 
    try {
    const result = ValidateParcoursSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message
      });
    }
    const userCheck =await userService.getUserByIdService(req.user.id)
     if (!userCheck) {
      return res.status(404).json({
        message: "Invalid User ID"
      });}

    const parcours = await parcoursService.createParcoursService(req.body , userCheck);

    return res.status(201).json({
      message: "Parcours created successfully",
      parcours
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error while creating parcours",
      error: error.message
    });
  }
};

export const getParcours = async (_req: Request, res: Response) => {
  try {
    const parcours = await parcoursService.getParcoursService();

    return res.status(200).json(parcours);
  } catch (error: any) {
    return res.status(500).json({
      message: "Error while fetching parcours",
      error: error.message
    });
  }
};

export const getParcoursById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid parcours ID"
      });
    }

    const parcours = await parcoursService.getParcoursByIdService(id);

    if (!parcours) {
      return res.status(404).json({
        message: "Parcours not found"
      });
    }

    return res.status(200).json(parcours);
  } catch (error: any) {
    return res.status(500).json({
      message: "Error while fetching parcours",
      error: error.message
    });
  }
};

export const deleteParcours = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid parcours ID"
      });
    }

    const deleted = await parcoursService.deleteParcoursService(id);

    if (!deleted) {
      return res.status(404).json({
        message: "Parcours not found"
      });
    }

    return res.status(200).json({
      message: "Parcours deleted successfully"
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error while deleting parcours",
      error: error.message
    });
  }
};
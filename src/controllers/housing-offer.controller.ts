import { Request, Response } from "express";
import { HousingOfferService } from "../services/housing-offer.service";
import { ValidateHousingOfferSchema } from "./housing-offer.schema";

const service = new HousingOfferService();

export const createHousingOffer = async (req: Request, res: Response) => {
  const result = ValidateHousingOfferSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const offer = await service.create(result.data);
  return res.status(201).json({ message: "Housing offer created", offer });
};

export const getHousingOffers = async (_req: Request, res: Response) => {
  const offers = await service.getAll();
  return res.json(offers);
};

export const updateHousingOffer = async (req: Request, res: Response) => {
  const result = ValidateHousingOfferSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const offer = await service.update(Number(req.params.id), result.data);
  if (!offer) {
    return res.status(404).json({ message: "Housing offer not found" });
  }

  return res.json({ message: "Housing offer updated", offer });
};

export const deleteHousingOffer = async (req: Request, res: Response) => {
  const deleted = await service.delete(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({ message: "Housing offer not found" });
  }

  return res.json({ message: "Housing offer deleted" });
};

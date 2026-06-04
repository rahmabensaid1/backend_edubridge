import { Router } from "express";
import {
  createHousingOffer,
  deleteHousingOffer,
  getHousingOffers,
  updateHousingOffer
} from "../controllers/housing-offer.controller";

const router = Router();

router.get("/", getHousingOffers);
router.post("/", createHousingOffer);
router.put("/:id", updateHousingOffer);
router.delete("/:id", deleteHousingOffer);

export default router;

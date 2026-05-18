import { Router } from "express";
import {
  getDashboardStats,
  getEventsByType,
  getDossiersByStatus
} from "../controllers/dashboard.controller";

const router = Router();

router.get("/stats", getDashboardStats);
router.get("/events-by-type", getEventsByType);
router.get("/dossiers-by-status", getDossiersByStatus);

export default router;

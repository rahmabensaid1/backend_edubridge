import { Router } from "express";
import {
  createEvent,
  getEvents,
  getEventById,
  deleteEvent,
  registerToEvent,
  getMyRegisteredEvents,
  getAdminRegistrations
} from "../controllers/event.controller";

import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.get("/my/registered", authMiddleware, getMyRegisteredEvents);
router.get("/admin/registrations", authMiddleware, getAdminRegistrations);
router.post("/:id/register", authMiddleware, registerToEvent);
router.get("/:id", getEventById);
router.delete("/:id", authMiddleware, deleteEvent);

export default router;

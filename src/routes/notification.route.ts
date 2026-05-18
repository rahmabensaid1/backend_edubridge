import { Router } from "express";
import {
  createNotification,
  getNotifications,
  getMyNotifications,
  getNotificationsByUser,
  markNotificationAsRead,
  deleteNotification
} from "../controllers/notification.controller";

const router = Router();

router.post("/", createNotification);
router.get("/", getNotifications);
router.get("/me", getMyNotifications);
router.get("/user/:userId", getNotificationsByUser);
router.patch("/:id/read", markNotificationAsRead);
router.put("/:id/read", markNotificationAsRead);
router.delete("/:id", deleteNotification);

export default router;

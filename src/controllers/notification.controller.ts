import { Request, Response } from "express";
import { NotificationService } from "../services/notification.service";
import { ValidateNotificationSchema } from "./notification.schema";

const notificationService = new NotificationService();

export const createNotification = async (req: any, res: Response) => {
  const result = ValidateNotificationSchema.safeParse({
    ...req.body,
    senderId: req.body.senderId || req.user?.id
  });

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const notification = await notificationService.createNotificationService(result.data);
  return res.status(201).json({ message: "Notification created successfully", notification });
};

export const getNotifications = async (_req: Request, res: Response) => {
  const notifications = await notificationService.getNotificationsService();
  res.json(notifications.map(notification => notificationService.formatNotification(notification)));
};

export const getMyNotifications = async (req: any, res: Response) => {
  const notifications = await notificationService.getMyNotificationsService(req.user.id);
  res.json(notifications.map(notification => notificationService.formatNotification(notification)));
};

export const getNotificationsByUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const notifications = await notificationService.getMyNotificationsService(userId);
  res.json(notifications.map(notification => notificationService.formatNotification(notification)));
};

export const markNotificationAsRead = async (req: Request, res: Response) => {
  const notification = await notificationService.markAsReadService(Number(req.params.id));

  if (!notification) {
    return res.status(404).json({ message: "Notification not found" });
  }

  res.json({
    message: "Notification marked as read",
    notification: notificationService.formatNotification(notification)
  });
};

export const deleteNotification = async (req: Request, res: Response) => {
  const deleted = await notificationService.deleteNotificationService(Number(req.params.id));

  if (!deleted) {
    return res.status(404).json({ message: "Notification not found" });
  }

  res.json({ message: "Notification deleted" });
};

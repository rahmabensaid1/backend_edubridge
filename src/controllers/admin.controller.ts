import { Request, Response } from "express";
import { AdminService } from "../services/admin.service";
import { UserService } from "../services/user.service";
import { UserRole } from "../enums/user.enum";
import { ValidateAdminSchema } from "./admin.schema";

const adminService = new AdminService();
const userService = new UserService();

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = ValidateAdminSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message
      });
    }

    const userId = Number(req.params.userId);
    const user = await userService.getUserByIdService(userId);

    if (!user) {
      return res.status(404).json({
        message: "Invalid User ID"
      });
    }

    if (user.role !== UserRole.ADMIN) {
      return res.status(400).json({
        message: "User must have admin role"
      });
    }

    const existingAdmin = await adminService.getAdminByUserIdService(user.id);

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin profile already exists for this user"
      });
    }

    const admin = await adminService.createAdminService(result.data, user);

    return res.status(201).json({
      message: "Admin created successfully",
      admin
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error creating admin",
      error: error.message
    });
  }
};

export const getAdmins = async (_req: Request, res: Response) => {
  const admins = await adminService.getAdminsService();
  res.json(admins);
};

export const getAdminById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const admin = await adminService.getAdminByIdService(id);

  if (!admin) {
    return res.status(404).json({ message: "Admin not found" });
  }

  res.json(admin);
};

export const updateAdmin = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = await adminService.updateAdminService(id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Admin not found" });
  }

  res.json({
    message: "Admin updated",
    updated
  });
};

export const deleteAdmin = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await adminService.deleteAdminService(id);

  if (!deleted) {
    return res.status(404).json({ message: "Admin not found" });
  }

  res.json({
    message: "Admin deleted"
  });
};

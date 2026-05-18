import { Request, Response } from "express";
import { ProfileService } from "../services/profile.service";
import { UserService } from "../services/user.service";
import { ValidateProfileSchema } from "./profile.schema";

const profileService = new ProfileService();
const userService = new UserService();

export const createProfile = async (req: any, res: Response) => {
  try {
    const result = ValidateProfileSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message
      });
    }

    const user = await userService.getUserByIdService(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "Invalid User ID"
      });
    }

    const existingProfile = await profileService.getProfileByUserIdService(user.id);

    if (existingProfile) {
      return res.status(400).json({
        message: "Profile already exists for this user"
      });
    }

    const profile = await profileService.createProfileService(result.data, user);

    return res.status(201).json({
      message: "Profile created successfully",
      profile
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error creating profile",
      error: error.message
    });
  }
};

export const getProfiles = async (_req: Request, res: Response) => {
  const profiles = await profileService.getProfilesService();
  res.json(profiles);
};

export const getMyProfile = async (req: any, res: Response) => {
  const profile = await profileService.getProfileByUserIdService(req.user.id);

  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }

  res.json(profile);
};

export const upsertMyProfile = async (req: any, res: Response) => {
  try {
    const result = ValidateProfileSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message
      });
    }

    const user = await userService.getUserByIdService(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "Invalid User ID"
      });
    }

    const profile = await profileService.upsertProfileByUserService(result.data, user);

    return res.status(200).json({
      message: "Profile saved successfully",
      profile
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error saving profile",
      error: error.message
    });
  }
};

export const getProfileById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const profile = await profileService.getProfileByIdService(id);

  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }

  res.json(profile);
};

export const updateProfile = async (req: Request, res: Response) => {
  const result = ValidateProfileSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: result.error.issues[0].message
    });
  }

  const id = Number(req.params.id);
  const updated = await profileService.updateProfileService(id, result.data);

  if (!updated) {
    return res.status(404).json({ message: "Profile not found" });
  }

  res.json({
    message: "Profile updated",
    updated
  });
};

export const deleteProfile = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await profileService.deleteProfileService(id);

  if (!deleted) {
    return res.status(404).json({ message: "Profile not found" });
  }

  res.json({
    message: "Profile deleted"
  });
};

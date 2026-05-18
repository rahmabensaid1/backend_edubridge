import { Router } from "express";
import {
  createProfile,
  getProfiles,
  getMyProfile,
  upsertMyProfile,
  getProfileById,
  updateProfile,
  deleteProfile
} from "../controllers/profile.controller";

const router = Router();

router.post("/", createProfile);
router.get("/", getProfiles);
router.get("/me", getMyProfile);
router.put("/me", upsertMyProfile);
router.get("/:id", getProfileById);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;

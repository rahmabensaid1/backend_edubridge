import { authMiddleware } from "../middlewares/auth.middleware";
import {Router} from "express";
import { createUser, deleteUser, getMe, getUserById, getUsers, googleSignIn, resetPassword, signIn, updateUser } from "../controllers/user.controller";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/me", authMiddleware, getMe);
router.post("/signin", signIn);
router.post("/reset-password", resetPassword);
router.post("/google", googleSignIn);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", authMiddleware, deleteUser);


export default router;

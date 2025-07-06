import express from "express";
import { auth } from "../middleware/auth.js";
import {
  profile,
  UserInfo,
  getAllUsers,
  getUsersById,
} from "../controllers/User.controller.js";
const router = express.Router();

router.get("/api/user/me/", auth, profile);
router.get("/api/users/info/:id", UserInfo);
router.get("/api/users", getAllUsers);
router.get("/api/users/:id", getUsersById);

export default router;

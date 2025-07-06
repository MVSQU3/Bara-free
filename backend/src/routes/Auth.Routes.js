import express from "express";
import { login, signup } from "../controllers/Auth.controller.js";
const router = express.Router();

router.post("/api/auth/signup", signup);
router.post("/api/auth/login", login);

export default router;

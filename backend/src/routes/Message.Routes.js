import express from "express";
import { auth } from "../middleware/auth.js";
import {
  getAllMessage,
  sendMessage,
} from "../controllers/Message.controller.js";
const router = express.Router();

router.post("/api/send-message/:id", auth, sendMessage);
router.get("/api/get-all-message/:recId/", auth, getAllMessage);

export default router;

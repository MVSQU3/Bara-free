import express from "express";
import {
  createService,
  getAllServices,
  getServiceById,
} from "../controllers/Service.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/api/service", getAllServices);
router.get("/api/service/:id", getServiceById);
router.post("/api/service", auth, createService);

export default router;

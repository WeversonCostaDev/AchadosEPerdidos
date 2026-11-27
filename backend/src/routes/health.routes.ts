import { Router } from "express";
import { verificarSaude } from "../controllers/health.controller.js";

const router = Router();

router.get("/", verificarSaude);

export default router;
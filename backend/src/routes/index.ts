import { Router } from "express";
import healthRoutes from "./health.routes.js";

const router = Router();

// onde será cadastrado cada módulo: autenticação, perfil...
router.use("/health", healthRoutes);

export default router;
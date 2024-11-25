import { Router } from "express";
import { createUserRole } from "../controllers/userRoles.controller.js";

const router = Router();

router.route('/').post(createUserRole);

export default router
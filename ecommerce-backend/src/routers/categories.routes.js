import { Router } from "express";
import { createCategories } from "../controllers/categories.controller";
import { verifyJwt } from "../middlewares/auth.middleware";

const categoriesRouter = Router();

categoriesRouter.route("/create").post(verifyJwt,createCategories);
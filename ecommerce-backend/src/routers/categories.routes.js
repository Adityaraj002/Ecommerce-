import { Router } from "express";
import {
  createCategories,
  updateCategroy,
  getAllCategories,
  getCategoryById,
  deleteCategory,
} from "../controllers/categories.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { verifyPermission } from "../middlewares/auth.middleware.js";
import { UserRolesEnum } from "../constent.js";
import { validateCategroy } from "../validation/category.validate.js";
const categoriesRouter = Router();

categoriesRouter
  .route("/")
  .post(
    verifyJwt,
    verifyPermission([UserRolesEnum.ADMIN]),
    validateCategroy(),
    createCategories
  )
  .get(verifyJwt, verifyPermission([UserRolesEnum.ADMIN]), getAllCategories);
  
categoriesRouter
  .route("/:category_id")
  .get(verifyJwt, verifyPermission([UserRolesEnum.ADMIN]), getCategoryById)
  .put(
    verifyJwt,
    verifyPermission([UserRolesEnum.ADMIN]),
    validateCategroy(),
    updateCategroy
  )
  .delete(verifyJwt, verifyPermission([UserRolesEnum.ADMIN]), deleteCategory);

export default categoriesRouter;

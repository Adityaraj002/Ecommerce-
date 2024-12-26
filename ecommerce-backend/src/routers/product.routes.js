import { Router } from "express";
import { createProduct, getAllProduct, updateProduct } from '../controllers/product.controller.js'
import { verifyJwt, verifyPermission } from "../middlewares/auth.middleware.js";
import { UserRolesEnum } from "../constent.js";
import { upload } from "../middlewares/multer.middleware.js";

const ProductRouter = Router()

ProductRouter.route("/").post(
  verifyJwt,
  verifyPermission([UserRolesEnum.ADMIN]),
  upload.fields([{ name: "mainImage", maxCount: 1 }]),
  createProduct
);
ProductRouter.route("/").get(getAllProduct)
ProductRouter.route("/:product_id").put(
  verifyJwt,
  verifyPermission([UserRolesEnum.ADMIN]),
  upload.fields([{ name: "mainImage", maxCount: 1 }]),
  updateProduct
);

export default ProductRouter
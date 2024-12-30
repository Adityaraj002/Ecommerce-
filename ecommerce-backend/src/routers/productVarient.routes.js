import { Router } from "express";
import {
  createProductVariant
} from "../controllers/productVarient.controller.js";
import { verifyJwt, verifyPermission } from "../middlewares/auth.middleware.js";
import { UserRolesEnum } from "../constent.js";
import { upload } from "../middlewares/multer.middleware.js";

const ProductVarient = Router()

ProductVarient.route('/:products_id').post(
  verifyJwt,
  verifyPermission([UserRolesEnum.ADMIN]),
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    {name:"subMainImages",maxCount:10}
  ]),
  createProductVariant
)

export default ProductVarient
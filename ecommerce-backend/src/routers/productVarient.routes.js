import { Router } from "express";
import {
  createProductVariant,
  updateProductVariant,
} from "../controllers/productVarient.controller.js";
import { verifyJwt, verifyPermission } from "../middlewares/auth.middleware.js";
import { UserRolesEnum } from "../constent.js";
import { upload } from "../middlewares/multer.middleware.js";
import { MAXIMUM_SUB_IMAGE_COUNT } from "../constent.js";
const ProductVarient = Router();

ProductVarient.route("/:products_id").post(
  verifyJwt,
  verifyPermission([UserRolesEnum.ADMIN]),
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "subMainImages", maxCount: MAXIMUM_SUB_IMAGE_COUNT },
  ]),
  createProductVariant
);

ProductVarient.route("/:products_id").put(
  verifyJwt,
  verifyPermission([UserRolesEnum.ADMIN]),
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "subMainImages", maxCount: MAXIMUM_SUB_IMAGE_COUNT },
  ]),
  updateProductVariant
);

export default ProductVarient;

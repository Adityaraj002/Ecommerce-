import { Router } from "express";
import {
  addAddress,
  getAddress,
  updateAddress,
  setDefaultAddress,
  deleteOneAddress,
  deleteAllAddress,
} from "../controllers/shoppingAddress.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const ShoppingAddressRouter = Router();

ShoppingAddressRouter.use(verifyJwt);

ShoppingAddressRouter.route("/addAddress").post(addAddress);
ShoppingAddressRouter.route("/getAddress").post(getAddress);
ShoppingAddressRouter.route("/updateAddress").patch(updateAddress);
ShoppingAddressRouter.route("/setDefaultAddress").patch(setDefaultAddress);
ShoppingAddressRouter.route("/deleteOneAddress/:addressId").delete(
  deleteOneAddress
);
ShoppingAddressRouter.route("/deleteAllAddress").delete(deleteAllAddress);

export default ShoppingAddressRouter;

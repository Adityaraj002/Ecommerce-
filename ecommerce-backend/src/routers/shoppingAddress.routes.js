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

ShoppingAddressRouter.route("/addAddress").post(verifyJwt, addAddress);
ShoppingAddressRouter.route("/getAddress").post(verifyJwt, getAddress);
ShoppingAddressRouter.route("/updateAddress").patch(verifyJwt, updateAddress);
ShoppingAddressRouter.route("/deleteOneAddress").delete(verifyJwt,deleteOneAddress);
ShoppingAddressRouter.route("/setDefaultAddress").patch(verifyJwt,setDefaultAddress);
ShoppingAddressRouter.route("/deleteAllAddress").delete(verifyJwt, deleteAllAddress);

export default ShoppingAddressRouter;

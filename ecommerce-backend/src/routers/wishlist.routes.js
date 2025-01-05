import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import {
  addWishlist,
  clearAllFromWishtlist,
  getWistlist,
  removeFromWishlist,
} from "../controllers/wishlist.controller.js";


const wishlist = Router()

wishlist.route("/:product_id").delete(verifyJwt, removeFromWishlist);
wishlist.route("/")
  .get(verifyJwt, getWistlist)
  .post(verifyJwt, addWishlist)
  .delete(verifyJwt, clearAllFromWishtlist);

export default wishlist
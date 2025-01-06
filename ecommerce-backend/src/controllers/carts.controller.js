import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Carts } from "../models/carts.model.js";
import mongoose from "mongoose";
import { ProductVariants } from "../models/productVariants.model.js";
const addToCart = asyncHandler(async (req, res) => {
  const { products_id, productsVarient_id, quantity } = req.body;
  const user_id = req.user._id;
  const existingCart = await Carts.findOne({
    user_id,
    products_id,
    productsVarient_id,
  });

  if (existingCart) {
    existingCart.quantity += quantity;
    await existingCart.save();
    return res
      .status(200)
      .json(new ApiResponse(200, "Cart updating successfull.", existingCart));
  }

  const cart = await Carts.create({
    user_id,
    products_id,
    productsVarient_id,
    quantity,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Product added to cart Successfull.", cart));
});

const getCart = asyncHandler(async (req, res) => {
  const user_id = req.user._id;

  const cartAggregate = Carts.aggregate([
    {
      $match: { user_id: new mongoose.Types.ObjectId(user_id) },
    },
    {
      $lookup: {
        from: "products",
        localField: "products_id",
        foreignField: "_id",
        as: "product_Details",
      },
    },
    {
      $lookup: {
        from: "productvariants",
        localField: "productsVarient_id",
        foreignField: "_id",
        as: "productVariant_Details",
      },
    },
    {
      $unwind: "$product_Details",
    },
    {
      $unwind: "$productVariant_Details",
    },
    {
      $project: {
        _id: 1,
        quantity: 1,
        product_Details: 1,
        productVariant_Details: 1,
      },
    },
  ]);

  const cart = await Carts.aggregatePaginate(cartAggregate);
  return res
    .status(200)
    .json(new ApiResponse(200, "Getting product successfull.", cart));
});

const removeFromCart = asyncHandler(async (req, res) => {
  const { products_id, productsVarient_id } = req.body;
  const user_id = req.user._id;

  const cart = await Carts.findOneAndDelete({
    user_id,
    products_id,
    productsVarient_id,
  });
  if (!cart) {
    return res
      .status(400)
      .json(new ApiResponse(400, "there are no product found.", cart));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Item removed from cart successfully", cart));
});
export { addToCart, getCart, removeFromCart };

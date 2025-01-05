import mongoose from "mongoose";
import { Wishlist } from "../models/wishlist.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addWishlist = asyncHandler(async (req, res) => {
  const { product_id, productVarient_id } = req.body;
  const user_id = req.user._id;

  const existingWishlist = await Wishlist.findOne({
    user_id,
    product_id,
    productVarient_id,
  });
  if (existingWishlist) {
    return res
      .status(400)
      .json(new ApiResponse(400, "Iteam already exist in wishlist."));
  }

  const wishlist = await Wishlist.create({
    user_id,
    products_id: product_id,
    productVarient_id,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Product add to wishlist.", wishlist));
});

// Get wishlist items for a user
const getWistlist = asyncHandler(async (req, res) => {
  const user_id = req.user._id;
  const wishlistaggregate = Wishlist.aggregate([
    {
      $match: {
        user_id: new mongoose.Types.ObjectId(user_id),
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "products_id",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    {
      $unwind: "$productDetails",
    },
    {
      $lookup: {
        from: "productVarient", // External collection for additional product variant data if needed
        localField: "productVarient_id",
        foreignField: "_id",
        as: "productVariantDetails",
      },
    },
    // {
    //   $unwind: {
    //     path: "$productVariantDetails",
    //     // preserveNullAndEmptyArrays: true, // Avoid dropping the result if no variant found
    //   },
    // },
    {
      $project: {
        _id: 1,
        user_id: 1,
        productDetails: {
          productName: 1,
          description: 1,
          category_id: 1,
        },
        productVariantDetails: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    },
  ]);

  const wishlist = await Wishlist.aggregatePaginate(wishlistaggregate);

  return res
    .status(200)
    .json(new ApiResponse(200, "Getting whishlist successfull.", wishlist));
});

const removeFromWishlist = asyncHandler(async (req, res) => {
  const { product_id } = req.params;
  const user_id = req.user._id;

  // Find and remove the product from the user's wishlist
  const wishlist = await Wishlist.findOneAndDelete({
    user_id,
    products_id:product_id,
  });

  if (!wishlist) {
    return res
      .status(404)
      .json(new ApiResponse(404, "Product not found in wishlist."));
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Product removed from Wishlist successfully.",
        wishlist
      )
    );
});


const clearAllFromWishtlist = asyncHandler(async (req, res) => {
  const user_id = req.user._id;
  const wishlist = await Wishlist.deleteMany({ user_id });

   if (wishlist.deletedCount === 0) {
     return res
       .status(404)
       .json(new ApiResponse(404, "No items found in the wishlist.", wishlist));
   }
  return res
    .status(200)
    .json(new ApiResponse(200, "All items in Wishlist clear.", wishlist));
});

export { addWishlist, getWistlist, removeFromWishlist, clearAllFromWishtlist };

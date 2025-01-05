import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Reviews } from "../models/reviews.model.js";
import mongoose from "mongoose";

const addReviews = asyncHandler(async (req, res) => {
  const { rating, review_text } = req.body;
  const { product_id } = req.params;

  if (!rating || !product_id || !review_text) {
    throw new ApiError(404, "Missing review please add.");
  }
  
  const owner = req.user._id;
  const reviews = await Reviews.create({
    user_id: owner,
    rating,
    review_text,
    products_id: product_id,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Creating Reviews successfull.", reviews));
});

// approved reviews for products
const getReviews = asyncHandler(async (req, res) => {
  const { product_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(product_id)) {
    return res.status(400).json({ message: "Products id is Missing" });
  }

  const reviewsAggregate = Reviews.aggregate([
    {
      $match: {
        products_id: new mongoose.Types.ObjectId(product_id),
        status: "approved",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $project: {
        _id: 1,
        rating: 1,
        review_text: 1,
        createdAt: 1,
        "user.fullName": 1,
      },
    },
  ]);
  const reviews = await Reviews.aggregatePaginate(reviewsAggregate);
  return res
    .status(200)
    .json(new ApiResponse(200, "Getting reviews Successfull.", reviews));
});

// Moderate a reviews (approve/reject)
const moderateReviews = asyncHandler(async (req, res) => {
  const { review_id } = req.params;
  const { status } = req.body;

  if (!["approved", "pending", "rejected"].includes(status)) {
    throw new ApiError(404, "Invalind status value");
  }

  const reviews = await Reviews.findByIdAndUpdate(
    review_id,
    { status },
    { new: true }
  );

  if (!reviews) {
    throw new ApiError(400, "Reviews does not found.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Changing Reviews successfull.", reviews));
});

const deletereviews = asyncHandler(async (req, res) => {
  const { reviews_id } = req.params;

  const reviews = await Reviews.findByIdAndDelete(reviews_id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Success in deleting reviws.", reviews));
});

export { addReviews, getReviews, moderateReviews, deletereviews };

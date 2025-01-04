import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Comment } from "../models/comments.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getMongoosePaginationOption } from "../utils/helpers.js";
import mongoose from 'mongoose';

const addComment = asyncHandler(async (req, res) => {
  const { product_id } = req.params;
  const { content } = req.body;

  const user_id = req.user._id;
  const productComment = await Comment.create({
    content,
    user_id,
    product_id,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        productComment,
        "Adding Comment to Product Successfull."
      )
    );
});

const updatecomment = asyncHandler(async (req, res) => {
  const { comment_id } = req.params;
  const { content } = req.body;

  const comment = await Comment.findByIdAndUpdate(
    comment_id,
    {
      $set: {
        content,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, comment, "Updating comment successfull."));
});

const deletecomment = asyncHandler(async (req, res) => {
  const { comment_id } = req.params
  
  const commentToDelete = await Comment.findByIdAndDelete(comment_id);

  return res
    .status(200)
    .json(new ApiResponse(
      200,
      "Deleting the Comment SuccessFull.",
      { comment: commentToDelete })
    );
})

const getcomments = asyncHandler(async (req, res) => {
  const { product_id } = req.params
  const { page = 1, limit = 10 } = req.query
  
  const commentsAggregation = Comment.aggregate([
    {
      $match: {
        product_id: new mongoose.Types.ObjectId(product_id),
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
    {
      $unwind: {
        path: "$user",
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: { path: "$product" },
    },
    {
      $project: {
        _id: 1,
        content: 1,
        status: 1,
        "user._id": 1,
        "user.fullName": 1,
        "product._id": 1,
        "product.productName": 1,
      },
    },
    {
      $sort: { createdAt: 1 },
    },
  ]);

  const comments = await Comment.aggregatePaginate(
    commentsAggregation,
    getMongoosePaginationOption({
      page,
      limit,
      customeLabels: {
        totalDocs: "totalComments",
        docs : "comments"
      }
    })
  )

  return res
    .status(200)
    .json(new ApiResponse(
      200,
      "Getting comments successfull.",comments)
    )
})
export { addComment, updatecomment, deletecomment, getcomments };

import mongoose, { Schema } from "mongoose";

const WishlistSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    productVariant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductVarients",
      required:true
    },
  },
  { timestamps: true }
);

export const Wishlist = mongoose.model("Wishlist",WishlistSchema);
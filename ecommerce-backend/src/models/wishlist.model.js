import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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
    productVarient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductVariants",
      required:true
    },
  },
  { timestamps: true }
);
WishlistSchema.plugin(mongooseAggregatePaginate)
export const Wishlist = mongoose.model("Wishlist",WishlistSchema);
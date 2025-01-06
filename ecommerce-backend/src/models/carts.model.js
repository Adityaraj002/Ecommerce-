import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const CartSchema = new Schema(
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
    productsVarient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductVarients",
      required:true
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must not be less than 1."],
      default:1
    }
  },
  { timestamps: true }
);

CartSchema.plugin(mongooseAggregatePaginate)
export const Carts = mongoose.model("Carts", CartSchema);
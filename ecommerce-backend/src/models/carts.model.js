import mongoose, { Schema } from "mongoose";

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
      type:Number
    }
  },
  { timestamps: true }
);

export const Carts = mongoose.model("Carts", CartSchema);
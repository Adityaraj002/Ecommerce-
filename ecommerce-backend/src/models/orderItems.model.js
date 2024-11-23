import mongoose, { Schema } from "mongoose";

const OrderItemSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "Orders",
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    size: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    quentity: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    productVariant_id: {
      type: Schema.Types.ObjectId,
      ref: "ProductVarients",
    },
  },
  { timestamps: true }
);

export const Orderitems = mongoose.model("Orderitems",OrderItemSchema);
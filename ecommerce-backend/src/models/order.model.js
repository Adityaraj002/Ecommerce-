import mongoose, { Schema } from "mongoose";

const OrdersSchema = new Schema(
  {
    orderNumber: {
      type: String,
      required: true,
    },
    item: [
      {
        type: Schema.Types.ObjectId,
        ref: "Orderitems",
        required:true
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    discountAmount: {
      type: Number,
    },
    grossAmount: {
      type: Number,
      required: true,
    },
    shippingAmount: {
      type: Number,
      default: 0,
    },
    netAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["placed", "processing", "shipping", "delivered"],
      default: "placed",
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "not paid"],
      default: "not paid",
    },
    paymentType: {
      type: String,
      enum: ["netBanking", "upi", "cod"],
      default: "cod",
    },
    payment_transaction_id: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Orders = mongoose.model("Orders",OrdersSchema)
import mongoose, { Schema } from "mongoose";

const OrderShippingAddressesSchema = new Schema(
  {
    order_id: {
      types: Schema.Types.ObjectId,
      ref: "Orders",
      required: true,
    },
    fullAddress: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      max: 10,
      required: true,
    },
    shippingAddress_id: {
      type: Schema.Types.ObjectId,
      ref: "ShoppingAddresses",
      required:true
    },
  },
  { timestamps: true }
);

export const OrderShippingAddress = mongoose.model("OrderShippingAddress",OrderShippingAddressesSchema);
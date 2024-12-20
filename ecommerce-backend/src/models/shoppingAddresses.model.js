import mongoose, { Schema } from "mongoose"; 

const ShoppingAddressesSchema = new Schema(
  {
    fullAddress: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip_code: {
      type: Number,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isDeleted: {
      type: Boolean, default: false
    },
    isDefault: {
      type: Boolean,
      default:false
    }
  },
  { timestamps: true }
);

export const ShoppingAddresses = mongoose.model("ShoppingAddresses",ShoppingAddressesSchema);
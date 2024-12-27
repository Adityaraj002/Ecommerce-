import mongoose, { Schema } from 'mongoose'

const ProductVariantsSchema = new Schema(
  {
    products_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      requried: true,
    },
    mainImage: {
      required: true,
      type: {
        url: String,
        localPath: String,
      },
    },
    subMainImages: {
      required: true,
      type: {
        url: String,
        localPath: String,
      },
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
      default: 0,
    },
    StockQuantity: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "default"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const ProductVarients = mongoose.model("ProductVarients",ProductVariantsSchema);
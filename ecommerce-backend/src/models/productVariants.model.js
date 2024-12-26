import mongoose, { Schema } from 'mongoose'

const ProductVariantsSchema = new Schema(
  {
    products_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      requried: true,
    },
    thumbnail: {
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
  },
  { timestamps: true }
);

export const ProductVarients = mongoose.model("ProductVarients",ProductVariantsSchema);
import mongoose, { Schema } from "mongoose";
import AggregatePaginate from "mongoose-aggregate-paginate-v2";
const ProductVariantsSchema = new Schema(
  {
    products_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    mainImage: {
      required: true,
      type: {
        url: String,
        localPath: String,
      },
    },
    subMainImages: {
      type: [
        {
          url: String,
          localPath: String,
        },
      ],
      default: [],
    },
    color: {
      type: String,
    },
    size: {
      type: String,
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

ProductVariantsSchema.plugin(AggregatePaginate);
export const ProductVarients = mongoose.model(
  "ProductVarients",
  ProductVariantsSchema
);

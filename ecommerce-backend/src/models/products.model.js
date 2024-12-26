import mongoose, { Schema } from "mongoose";
import AggregatePaginate from "mongoose-aggregate-paginate-v2";

const ProductsSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: {
      type: String,
    },
    mainImage: {
      required: true,
      type: {
        url: String,
        localPath: String,
      },
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    stockQuantity: {
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
ProductsSchema.plugin(AggregatePaginate)
export const Products = mongoose.model("Products", ProductsSchema);

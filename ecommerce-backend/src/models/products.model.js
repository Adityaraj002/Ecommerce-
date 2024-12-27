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
  },
  { timestamps: true }
);
ProductsSchema.plugin(AggregatePaginate)
export const Products = mongoose.model("Products", ProductsSchema);

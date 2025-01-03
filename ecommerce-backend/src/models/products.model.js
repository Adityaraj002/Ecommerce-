import mongoose, { Schema } from "mongoose";
import AggregatePaginate from "mongoose-aggregate-paginate-v2";
// import { ProductVariants } from "./productVariants.model.js";
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

// Pre remove hook for delelting product variants
ProductsSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    try {
      await mongoose
        .model("ProductVariants")
        .deleteMany({ products_id: this._id });
      next();
    } catch (error) {
      console.error("this is pre remove hook", error);
      next(error);
    }
  }
);

ProductsSchema.plugin(AggregatePaginate)
export const Products = mongoose.model("Products", ProductsSchema);

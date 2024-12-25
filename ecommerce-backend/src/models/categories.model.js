import mongoose, { Schema } from "mongoose"
import aggregatePaginate from "mongoose-aggregate-paginate-v2"
const CategoriesSchema = new Schema(
  {
    //For nesting category like
    /*-> inside Electronics have mobile, laptop and TV etc this is called parent_cat_id */
    parent_cat_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
CategoriesSchema.plugin(aggregatePaginate);
export const Category = mongoose.model("Category", CategoriesSchema);
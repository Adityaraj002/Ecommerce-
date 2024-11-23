import mongoose, { Schema } from "mongoose"

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
    urlSlug: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "default"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", CategoriesSchema);
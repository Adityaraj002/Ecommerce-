import mongoose, { Schema } from 'mongoose'

const ProductsSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    urlSlug: {
      type: String,
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required:true
    },
    stockQuantity: {
      type: Number,
      required:true
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'default'],
      default: 'active'
    }
  },
  { timestamps: true }
);

export const Products = mongoose.model("Products",ProductsSchema);
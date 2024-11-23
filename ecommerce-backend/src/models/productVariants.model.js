import mongoose, { Schema } from 'mongoose'

const ProductVariantsSchema = new Schema(
  {
    products_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      requried:true
    },
    color: {
      type:String
    },
    size: {
      type:Number
    },
    price: {
      type: Number,
      required : true
    },
    StockQuantity: {
      type: Number,
      required:true
    }
  },
  { timestamps: true }
);

export const ProductVarients = mongoose.model("ProductVarients",ProductVariantsSchema);
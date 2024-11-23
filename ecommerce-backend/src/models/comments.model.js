import mongoose, { Schema } from 'mongoose';

const CommentsSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Products",
      required:true
    },
    status: {
      type: String,
      enum: ['visible', 'hidden'],
      default:'visible'
    }
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", CommentsSchema);
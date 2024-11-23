import mongoose, { Schema } from "mongoose";

const OffersSchema = new Schema({
  couponCode: {
    type: String,
    required: true
  },
  discountType: {
    type: String,
    enum: ['fixed', 'rate'],
    required: true
  },
  discountValue: {
    type: Number,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_Date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, { timestamps: true });

export const Offers = mongoose.model("Offers", OffersSchema);
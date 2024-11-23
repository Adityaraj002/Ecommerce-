import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  role_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserRole",
    required: true
  },
  fullName: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  phoneNumber: {
    type: String,
    required:true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'block'],
    default : 'active'
  }
}, { timestamps: true })

export const User = mongoose.model("User", UserSchema);
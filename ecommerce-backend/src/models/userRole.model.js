import mongoose, { Schema } from 'mongoose'

const UserRoleSchema = new Schema({
  roleName: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const UserRole = mongoose.model("UserRole", UserRoleSchema);
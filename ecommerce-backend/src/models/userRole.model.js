import mongoose, { Schema } from 'mongoose'

const UserRoleSchema = new Schema({
  roleName: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const Userrole = mongoose.model("Userrole", UserRoleSchema,'userroles');
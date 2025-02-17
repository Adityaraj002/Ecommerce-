import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserRolesEnum } from "../constent.js";
const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      sparse: true, // Allows either email or phone to be present
      validate: {
        validator: function (v) {
          // Validate only if email is provided
          if (!v) return true;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(v);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      min: 3,
    },
    phoneNo: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      sparse: true, // Allows either email or phone to be present
      validate: {
        validator: function (v) {
          // Validate only if phone is provided
          if (!v) return true;
          const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Validates international numbers (E.164)
          return phoneRegex.test(v);
        },
        message: "Invalid phone number format",
      },
    },
    refreshToken: {
      type: String,
    },
    role: {
      type: String,
      enum: UserRolesEnum,
      default: UserRolesEnum.USER,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "block"],
      default: "active",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  // Hash the password before saving
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Instance method to validate passwords
UserSchema.methods.isPasswordCorrect = async function (password) {
  // console.log("this password ", this.password);
  // console.log("password ", password);
  const ismatched = await bcrypt.compare(password.trim(), this.password);
  // console.log("ismatched : ",ismatched);

  return ismatched;
};

// Instance method to generate access token
UserSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      phone_number: this.phone_number,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRED,
    }
  );
};
// Instance method to generate refresh token
UserSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRED,
    }
  );
};

export const User = mongoose.model("User", UserSchema);

/**
 
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
 
 */

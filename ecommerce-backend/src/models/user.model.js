import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const UserSchema = new Schema(
  {
    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Userrole",
      required: true,
    },
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
    phone_number: {
      type: String,
      trim: true,
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
    status: {
      type: String,
      enum: ["active", "inactive", "block"],
      default: "active",
    },
  },
  { timestamps: true }
);

// Pre-save hook for password hashing
UserSchema.pre('save',async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
})


// Instance method to validate passwords
UserSchema.method.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password,this.password)
}


// Instance method to generate access token
UserSchema.method.generateAccessToken = function () {
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
}
// Instance method to generate refresh token
UserSchema.method.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      fullName: this.fullName,
      phone_number: this.phone_number,
      email: this.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRED,
    }
  );
}

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
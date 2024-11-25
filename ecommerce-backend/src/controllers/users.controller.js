import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Userrole } from "../models/userRole.model.js";
import mongoose from "mongoose";

const register = asyncHandler(async (req, res) => {
  const { role, fullName, email, phoneNo, password } = req.body;

  if (
    [role, fullName, email, phoneNo, password].some((field) => !field?.trim())
  ) {
    throw new ApiError(400, "All fields are required.");
  }

  const roleId = mongoose.Types.ObjectId.isValid(role)
    ? new mongoose.Types.ObjectId(role)
    : null;
  if (!roleId) {
    throw new ApiError(400, "Invalid Role ID format.");
  }

  // Check if the role exists
  const roleData = await Userrole.findById(roleId);
  if (!roleData) {
    throw new ApiError(404, `Role '${role}' does not exist.`);
  }

  const existingUser = await User.findOne({ $or: [{ email }, { phoneNo }] });
  if (existingUser) {
    throw new ApiError(409, "User already exists. Please login.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullName,
    role_id: roledata._id,
    phoneNo,
    email,
    password: hashedPassword, // Ensure consistent field naming
  });

  return res
    .status(201)
    .json(new ApiResponse(201, "User created successfully", { user }));
});

export { register };

// import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Userrole } from "../models/userRole.model.js";
import {generateAccessAndRefreshToken} from "../services/generateAccessAndRefreshToken.js"
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

  const user = await User.create({
    fullName,
    role_id: roleData._id,
    phoneNo,
    email,
    password 
  });

  return res
    .status(201)
    .json(new ApiResponse(201, "User created successfully", { user }));
});

const option = {
  httpOnly: true,
  secure:true,
}

// Login controller
const login = asyncHandler(async (req, res) => {
  const { email, phoneNo, password } = req.body;

  if ((!email && !phoneNo) || !password) {
    throw new ApiError(400,"Eamil and password are required.")
  }

  const user = await User.findOne(
    { $or:[{email},{phoneNo}]}
  )

  if (!user) {
    throw new ApiError(404,"User not Found")
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401,"Invalid Password")
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

  const loginUser = await User.findById(user._id).select("-password -refreshToken")

  return res.status(200).cookie("refreshToken",refreshToken,option).cookie("accessToken",accessToken,option).json(new ApiResponse(200,"Login SuccessFully",{user:loginUser}))

});
export { register, login };

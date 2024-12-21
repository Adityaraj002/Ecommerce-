import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
// import { Userrole } from "../models/userRole.model.js";
import { generateAccessAndRefreshToken } from "../services/generateAccessAndRefreshToken.js";
// import mongoose from "mongoose";
import { ShoppingAddresses } from "../models/shoppingAddresses.model.js";

const register = asyncHandler(async (req, res) => {
  const {  fullName, email, phoneNo, password } = req.body;

  if (
    [ fullName, email, phoneNo, password].some((field) => !field?.trim())
  ) {
    throw new ApiError(400, "All fields are required.");
  }

  // const roleId = mongoose.Types.ObjectId.isValid(role)
  //   ? new mongoose.Types.ObjectId(role)
  //   : null;
  // if (!roleId) {
  //   throw new ApiError(400, "Invalid Role ID format.");
  // }

  // Check if the role exists
  // const roleData = await Userrole.findById(roleId);
  // if (!roleData) {
  //   throw new ApiError(404, `Role '${role}' does not exist.`);
  // }

  const existingUser = await User.findOne({ $or: [{ email }, { phoneNo }] });
  if (existingUser) {
    throw new ApiError(409, "User already exists. Please login.");
  }

  const user = await User.create({
    fullName,
    // role_id: roleData._id,
    phoneNo,
    email,
    password,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, "User created successfully", { user }));
});

const option = {
  httpOnly: true,
  secure: true,
};

// Login controller
const login = asyncHandler(async (req, res) => {
  const { email, phoneNo, password } = req.body;

  if ((!email && !phoneNo) || !password) {
    throw new ApiError(400, "Eamil and password are required.");
  }

  const user = await User.findOne({ $or: [{ email }, { phoneNo }] });

  if (!user) {
    throw new ApiError(404, "User not Found");
  }
  // console.log("Password giving : ",password)
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid Password");
  }
  // console.log("Hashed Password:", user.password);
  // console.log("Password Match Result:", isPasswordCorrect);


  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loginUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, option)
    .cookie("accessToken", accessToken, option)
    .json(new ApiResponse(200, "Login SuccessFully", { user: loginUser }));
});

//Logout controller
const logout = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .clearCookie("refreshToken")
    .clearCookie("accessToken")
    .json(new ApiResponse(200, "Logout SuccessFully"));
});

//Update user Details
const updateProfile = asyncHandler(async (req, res) => {
  const { fullName, email, phoneNo } = req.body;
  if (![fullName, email, phoneNo].some((field) => !field?.trim())) {
    throw new ApiError(400, "All fielda are required");
  }

  // Build the update object dynamically
  const updateFields = {};
  if (fullName?.trim()) updateFields.fullName = fullName;
  if (email?.trim()) updateFields.email = email;
  if (phoneNo?.trim()) updateFields.phoneNo = phoneNo;

  // Update the user details
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: updateFields },
    { new: true } // Return the updated document
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, "user Details Updated Successfully", { user }));
});

//Password update or forgot password
const updatePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword, confirmNewPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new ApiError(400, "please Enter old and New Password");
  }

  if (newPassword !== confirmNewPassword) {
    throw new ApiError(400, "New password and confirm password do not match.");
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "invalid old password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: true });

  return res
    .status(200)
    .json(new ApiResponse(200, "Password Update SuccessFully"));
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  return res.status(200).json(new ApiResponse(200, "User Profile", { user }));
});

const deleteUser = asyncHandler(async (req, res) => {
  const user_id = req.user._id;
  const userTodelete = await User.findByIdAndDelete(user_id);
  if (!userTodelete) {
    throw new ApiError(404, "User Not found or unauthorized");
  }

  //deleting user more data here
  await ShoppingAddresses.deleteMany({user_id})

  return res
    .status(200)
    .json(new ApiResponse(200,"Deleting user SuccessFull"))
})

export {
  register,
  login,
  logout,
  updateProfile,
  updatePassword,
  getUserProfile,
  deleteUser,
};

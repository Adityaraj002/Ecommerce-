import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

export const verifyJwt = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.headers("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "UnAuthorized");
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401,"Invalid Token")
    }
    req.user = user;
    next()
  } catch (err) {
    // console.error(err);
    throw new ApiError(401,err.message || "Invalid Token")
  }
});

export const verifyPermission = (role = []) => asyncHandler(async (req, res, next) => {
  if (!req.user?._id) {
    throw new ApiError(401,"UnAuthorized request ")
  }

  if (role.includes(req.user?.role)) {
    next();
  } else {
    throw new ApiError(401,"You are not allowed to perform this function")
  }
})
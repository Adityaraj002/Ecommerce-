import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.genrateRefreshToken();

    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })
    
    return {accessToken,refreshToken}
  } catch (error) {
    throw new ApiError(
      500,
      "Somthing went wrong while genrating refresh and access token"
    );
  }
};

export { generateAccessAndRefreshToken };

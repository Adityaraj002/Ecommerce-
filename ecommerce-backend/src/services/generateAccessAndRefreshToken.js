import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    // console.log("User in gar : ",user);
    
    const accessToken = user.generateAccessToken();
    // console.log("accessToken : ", accessToken);
    const refreshToken = user.generateRefreshToken();
    // console.log("refreshToken: ", refreshToken);

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

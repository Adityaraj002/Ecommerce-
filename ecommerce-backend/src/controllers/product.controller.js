import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js";

const createProduct = asyncHandler(async (req, res) => {
  const { productName, category_id, description, price, stockQuantity } = req.body
  
});

export { createProduct };

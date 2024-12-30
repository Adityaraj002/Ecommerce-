import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { ApiResponse } from "../utils/ApiResponse.js";
import { ProductVariants } from "../models/productVariants.model.js";
import {
  getLocalPath,
  getStaticFilePath,
  // removefromLocalPath,
} from "../utils/helpers.js";

const createProductVariant = asyncHandler(async (req, res) => {
  const { products_id } = req.params
  const {color, size, price, StockQuantity } = req.body 
  
  if (!products_id) {
    throw new ApiError(401, "product id is missing.")
  }

  // here we are checking Product mainImage or thumbnail is provide or not  and we are getting this during routing 
  if (!req.files?.mainImage || !req.files?.mainImage.length) {
    throw new ApiError(400,"there is no mainImage is provide.")
  }

  //saving the file on server and creating it url 
  const mainImageUrl = getStaticFilePath(req, req.files?.mainImage[0]?.fileName);
  
  const mainImageLocalPath = getLocalPath(req.file?.mainImage[0]?.fileName);

  // here check user provide subImages if yes then extrac else assing an empty array

  const subMainImages = req.files.subMainImages && req.files.subMainImages?.length ? req.files.subMainImages.map((image) => {
    const imageUrl = getStaticFilePath(req, image.fileName);
    const imageLocalPath = getLocalPath(req.fileName);

    return {
      url: imageUrl,
      localPath: imageLocalPath
    }
  }) : [];

  const owner = req.user._id;
  const productVarient = await ProductVariants.create({
    products_id,
    mainImage: {
      url: mainImageUrl,
      localUrl: mainImageLocalPath,
    },
    subMainImages,
    color,
    size,
    price,
    StockQuantity,
    owner,
  });


  return res
    .status(200)
    .json(new ApiResponse(200,productVarient,"Creation of ProductVarient successfull."))
})




export { createProductVariant };
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { ApiResponse } from "../utils/ApiResponse.js";
import { Products } from "../models/products.model.js";
import { ProductVariants } from "../models/productVariants.model.js";
import {
  getLocalPath,
  getStaticFilePath,
  removefromLocalPath,
} from "../utils/helpers.js";
import { MAXIMUM_SUB_IMAGE_COUNT } from '../constent.js';

const createProductVariant = asyncHandler(async (req, res) => {
  const { products_id } = req.params
  const {color, size, price, StockQuantity } = req.body 
  
  if (!products_id) {
    throw new ApiError(401, "product id is missing.")
  }

  const existProduct = await Products.findById(products_id)
  if (!existProduct) {
    throw new ApiError(404,"Product does not exist ")
  }
  // here we are checking Product mainImage or thumbnail is provide or not  and we are getting this during routing 
  if (!req.files?.mainImage || !req.files?.mainImage.length) {
    throw new ApiError(400,"there is no mainImage is provide.")
  }

  //saving the file on server and creating it url 
  const mainImageUrl = getStaticFilePath(req, req.files?.mainImage[0]?.filename);
  const mainImageLocalPath = getLocalPath(req.file?.mainImage[0]?.filename);


  // here check user provide subImages if yes then extrac else assing an empty array

  const subMainImages = req.files.subMainImages && req.files.subMainImages?.length ? req.files.subMainImages.map((image) => {
    const imageUrl = getStaticFilePath(req, image.filename);
    const imageLocalPath = getLocalPath(image.filename);

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

const updateProductVariant = asyncHandler(async (req, res) => {
  const { color, size, price, StockQuantity } = req.body
  const { products_id } = req.params
  
  const product = await ProductVariants.findById(products_id)
  if (!product) {
    throw new ApiError(400,"Productvarient does not exist.")
  }
  
  const mainImage = req.files?.mainImage[0]?.length
    ? {
        url: getStaticFilePath(req, req.files?.mainImage[0].filename),
        localPath: getLocalPath(req.files?.mainImage[0]?.filename),
      }
    : product.mainImage;

  if (product.mainImage.url !== mainImage.url) {
    removefromLocalPath(product.mainImage.localPath);
  }

  const subMainImages = req.files?.subMainImages && req.files?.subMainImages?.length ?
    req.files.subMainImages.map((image) => {
      const imageUrl = getStaticFilePath(req, image.filename);
      const imageLocalPath = getLocalPath(image.filename);

      return {
        url: imageUrl,
        localPath: imageLocalPath
      }
    }) : [];
  
  const existingImage = product.subMainImages.length
  const newImage = subMainImages.length
  const totalImage = existingImage + newImage
  
  if (totalImage > MAXIMUM_SUB_IMAGE_COUNT) {    
    for (const img of subMainImages) {
      console.log("img.localPath", img.localPath);
      await removefromLocalPath(img.localPath)
    }
  }
  const updateProductVarient = await ProductVariants.findByIdAndUpdate(
    products_id,
    {
      $set: {
        color,
        size,
        price,
        StockQuantity,
        mainImage,
        subMainImages,
      },
    },
    {
      new: true,
    }
  );

  return res.status(200).json(new ApiResponse(200, updateProductVarient,"updating Product varient successfull."));
})


export { createProductVariant, updateProductVariant };

/*
mainImageUrl --->  http://localhost:5000/images/undefined
mainImageLocalPath --->  public/images/undefined 

getting this mean i am using 
    const imageUrl = getStaticFilePath(req, image.filename);
    const imageLocalPath = getLocalPath(req.filename);
occuring because i am typing --> "fileName".
*/
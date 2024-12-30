import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { getLocalPath, getMongoosePaginationOption, getStaticFilePath, removefromLocalPath } from "../utils/helpers.js";
import { Category } from "../models/categories.model.js";
import { Products } from "../models/products.model.js";


const createProduct = asyncHandler(async (req, res) => {
  const { productName, category_id, description} =
    req.body;

  const category = await Category.findById(category_id);

  if (!category) {
    throw new ApiError(404, "Category does not exist");
  }
  
  const owner = req.user._id;

  const product = await Products.create({
    productName,
    category_id,
    description,
    owner,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Product creating successfully", product));
});

const getAllProduct = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query
  
  const productAggregate = Products.aggregate([
    { $match: {} },
    {
      $lookup: {
        from: "productvariants",
        localField: "_id",
        foreignField: "products_id",
        as: "variants",
      },
    },
  ]);
  const product = await Products.aggregatePaginate(
    productAggregate,
    getMongoosePaginationOption({
      page,
      limit,
      customeLabels: {
        totalDocs: "totalProducts",
        docs:"products",
      },
    })
  )
  
  return res
    .status(200)
    .json(new ApiResponse(200, product, "Get All Product Successfull"))
})

const updateProduct = asyncHandler(async (req, res) => {
  const { product_id } = req.params;
  const { productName, description} = req.body;

  const product = await Products.findById(product_id);

  if (!product) {
    throw new ApiError(404, "Product does not exist");
  }

  const updatedProduct = await Products.findByIdAndUpdate(
    product_id,
    {
      $set: {
        productName,
        description
      },
    },
    {
      new: true,
    }
  );

  // if (product.mainImage.url !== mainImage.url) {
  //   removefromLocalPath(product.mainImage.localPath);
  // }
  // console.log(updatedProduct);

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedProduct, "Updating product Successfully")
    );
});

const getProductById = asyncHandler(async (req, res) => {
  const { product_id } = req.params
  
  const product = await Products.findById(product_id)

  if (!product) {
    throw new ApiError(404,"Product does not exist")
  }

  return res
    .status(200)
    .json(new ApiResponse(200,product,"Getting Product successfully by id"))
})

const deleteProduct = asyncHandler(async (req, res) => {
  const { product_id } = req.params
  
  const product = await Products.findByIdAndDelete(product_id)

  if (!product) {
    throw new ApiError(404,"Product not found.")
  }

  return res
    .status(200)
    .json(new ApiResponse(200,product,"The product successfully deleted."))
})

export {
  createProduct,
  getAllProduct,
  updateProduct,
  getProductById,
  deleteProduct,
};


/*
 // console.log(req.files);

  if (!req.files?.mainImage || !req.files?.mainImage.length) {
    throw new ApiError(404, "Please provide main Images");
  }
  const mainImageUrl = getStaticFilePath(
    req,
    req.files.mainImage[0].filename
  );
  
  const mainImageLocalPath = getLocalPath(req.files.mainImage[0].filename);
  


  ----update 
  const mainImage = req.files?.mainImage[0]?.length
    ? {
      url: getStaticFilePath(req, req.files?.mainImage[0].filename),
      localPath:getLocalPath(req.files?.mainImage[0]?.filename)
    } : product.mainImage
  
  if (product.mainImage.url !== mainImage.url) {
    removefromLocalPath(product.mainImage.localPath)
  }
  console.log(updatedProduct);
*/
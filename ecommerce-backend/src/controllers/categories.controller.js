import { Category } from "../models/categories.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { getMongoosePaginationOption } from "../utils/helpers.js";

const createCategories = asyncHandler(async (req, res) => {
  const { parent_cat_id, categoryName } = req.body;

  const category = await Category.create({
    parent_cat_id,
    categoryName,
  });
  await category.save();

  return res
    .status(201)
    .json(new ApiResponse(201, "Category created successfully", category));
});

const updateCategroy = asyncHandler(async (req, res) => {
  const { category_id } = res.params;
  const { name, parent_cat_id } = req.body;

  const categroy = await Category.findByIdAndUpdate(
    category_id,
    {
      $set: {
        name,
        parent_cat_id,
      },
    },
    { new: true }
  );
});

const getAllCategories = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.params;

  const categoriresAggrigate = Category.aggregate([{ $match: {} }]);

  const category = await Category.aggregatePaginate(
    categoriresAggrigate,
    getMongoosePaginationOption({
      page,
      limit,
      customLabels: {
        totalDocs: "totalCategories",
        docs: "categories",
      },
    })
  );

  // console.log("hello ", categoriresAggrigate);

  return res
    .status(200)
    .json(new ApiResponse(200, "Categories fetched successfully", category));
});

const getCategoryById = asyncHandler(async (req, res) => {
  const { category_id } = req.params;
  const category = await Category.findById(category_id);

  if (!category) {
    throw new ApiError(404, "Category not exist");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Category fetch successfully", category));
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { category_id } = req.params;
  const category = await Category.findByIdAndDelete(category_id);

  if (!category) {
    throw new ApiError(4004, "Category not exist");
  }

  return res.status(200).json(
    new ApiResponse(200, "Category deteled Successfully", {
      deletedCategory: category,
    })
  );
});

export {
  createCategories,
  updateCategroy,
  getAllCategories,
  getCategoryById,
  deleteCategory,
};

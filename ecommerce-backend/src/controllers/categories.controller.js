import { Category } from "../models/categories.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";

const createCategories = asyncHandler(async (req, res) => {
  const { parent_cat_id, categoryName, urlSlug } = req.body
  
  const category = await Category.create({
    parent_cat_id,
    categoryName,
    urlSlug,
  })
  await category.save()

  return res.status(201).json(new ApiResponse(201,"Category created successfully",category))
})

export { createCategories };
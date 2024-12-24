import { body } from 'express-validator'

export const validateCategroy = () => {
  return [
    body("categoryName").trim().notEmpty().withMessage("Categroy name is requried"),
    body("parent_cat_id").trim().optional().isMongoId().withMessage("Parent category id should be valid mongo id")
  ];
}
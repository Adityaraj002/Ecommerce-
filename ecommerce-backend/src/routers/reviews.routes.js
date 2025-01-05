import { Router } from "express";
import { verifyJwt, verifyPermission } from "../middlewares/auth.middleware.js";
import { addReviews, deletereviews, getReviews, moderateReviews } from "../controllers/review.controller.js";
import { UserRolesEnum } from "../constent.js";

const reviews = Router()


reviews.route("/:product_id")
  .post(verifyJwt, addReviews)
  .get(getReviews);

reviews.route("/:review_id")
  .patch(verifyJwt, verifyPermission([UserRolesEnum.ADMIN]), moderateReviews)
  .delete(verifyJwt, deletereviews);

export default reviews
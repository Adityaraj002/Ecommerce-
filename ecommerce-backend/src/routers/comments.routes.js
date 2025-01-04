import { Router } from 'express'
import { verifyJwt } from '../middlewares/auth.middleware.js';
import {
  addComment,
  deletecomment,
  getcomments,
  updatecomment,
} from "../controllers/comments.controller.js";
import { mongoIdPathVariableValidator } from '../validation/mongoDb.validate.js';

const comment = Router();

comment
  .route("/:product_id")
  .post(verifyJwt, addComment)
  .get(verifyJwt, mongoIdPathVariableValidator("product_id"),getcomments);

comment
  .route("/:comment_id")
  .put(verifyJwt, updatecomment)
  .delete(verifyJwt,deletecomment)
export default comment;
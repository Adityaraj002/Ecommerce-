import { Router } from "express";
import {
  login,
  logout,
  register,
  updatePassword,
  updateProfile,
  getUserProfile,
  deleteUser,
} from "../controllers/users.controller.js";
import {
  userRegisterValidator,
  userLoginValidator,
} from "../validation/user.validation.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const userrouter = Router();

userrouter.route("/register").post(userRegisterValidator(),register);
userrouter.route("/login").post(userLoginValidator(), login);
userrouter.route("/logout").post(verifyJwt, logout);
userrouter.route("/updateProfile").post(verifyJwt, updateProfile);
userrouter.route("/updatePassword").post(verifyJwt, updatePassword);
userrouter.route("/getUserProfile").post(verifyJwt, getUserProfile);
userrouter.route("/deleteUser").delete(verifyJwt, deleteUser);

export default userrouter;

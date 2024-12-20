import { Router } from "express";
import { login, logout, register, updatePassword, updateProfile } from "../controllers/users.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const userrouter = Router()

userrouter.route("/register").post(register);
userrouter.route('/login').post(login);
userrouter.route("/logout").post(verifyJwt, logout);
userrouter.route("/updateProfile").post(verifyJwt, updateProfile);
userrouter.route("/updatePassword").post(verifyJwt, updatePassword);

export default userrouter;
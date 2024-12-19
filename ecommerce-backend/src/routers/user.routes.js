import { Router } from "express";
import { login, register } from "../controllers/users.controller.js";

const userrouter = Router()

userrouter.route("/register").post(register);
userrouter.route('/login').post(login);

export default userrouter;
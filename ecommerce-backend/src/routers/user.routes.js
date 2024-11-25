import { Router } from "express";
import { register } from "../controllers/users.controller.js";

const userrouter = Router()

userrouter.route("/register").post(register);

export default userrouter;
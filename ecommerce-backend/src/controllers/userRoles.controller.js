import { Userrole } from "../models/userRole.model.js";
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'


const createUserRole = asyncHandler(async (req, res) => {
  const { role } = req.body;

  if (!role || (role !== "Admin" && role !== "customer")) {
    throw new ApiError(400, "Please Select valid Role");
  }

  const existRole = await Userrole.findOne({ role });

  if (existRole) {
    throw new ApiError(409, "This Role is already exist");
  }
  // console.log("Role", existRole);
  
  const newRole = await Userrole.create({ roleName: role });
  // console.log("Role", newRole);
  return res
    .status(201)
    .json(
      new ApiResponse(200, "Creation of Role Success Full", { role: newRole })
    );
})

export { createUserRole };
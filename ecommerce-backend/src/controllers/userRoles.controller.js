import { Userrole } from "../models/userRole.model.js";
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'


const createUserRole = asyncHandler(async (req, res) => {
  try {
    const { role } = req.body;    

    if (!role || (role !== 'Admin' && role !== 'customer')) {
      throw new ApiError(400, "Please Select valid Role");
    }    

    const existRole = await Userrole.findOne({role});

    if (existRole) {
      throw new ApiError(409,"This Role is already exist")
    }    

    const newRole = await Userrole.create({ roleName: role });    

    return res
      .status(201)
      .json(
        new ApiResponse(200, "Creation of Role Success Full", {role:newRole})
      );
  } catch (error) {
    console.error("this error : ",error);
    
    throw new ApiError(500,"somethink went wrong while creating userRole")
  }
})

export { createUserRole };
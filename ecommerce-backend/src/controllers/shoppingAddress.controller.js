import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// import { User } from "../models/user.model.js";
import { ShoppingAddresses } from "../models/shoppingAddresses.model.js";

const addAddress = asyncHandler(async (req, res) => {
  const { fullAddress, state, city, zip_code } = req.body;
  if (!fullAddress?.trim() || !state?.trim() || !city?.trim() || !zip_code) {
    throw new ApiError(400, "All fields are required");
  }

  if (isNaN(zip_code)) {
    throw new ApiError(400, "Zip_code must be a valid number");
  }

  const user_id = req.user._id;

  const existingAddress = await ShoppingAddresses.findOne({
    fullAddress,
    state,
    city,
    zip_code,
    user_id,
  });
  if (existingAddress) {
    throw new ApiError(409, "This address already exists");
  }

  const newAddress = await ShoppingAddresses.create({
    fullAddress,
    state,
    city,
    zip_code,
    user_id,
  });
  await newAddress.save();

  return res
    .status(201)
    .json(new ApiResponse(201, "Address added successfully", { newAddress }));
});

const getAddress = asyncHandler(async (req, res) => {
  const user_id = req.user._id;

  const address = await ShoppingAddresses.aggregate([
    {
      $match: { user_id },
    },
    {
      $project: {
        fullAddress: 1,
        state: 1,
        city: 1,
        zip_code: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    },
  ]);
  if (!address) {
    throw new ApiError(404, "Address not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "user Address get successfully", { address }));
});

const updateAddress = asyncHandler(async (req, res) => {
  const { fullAddress, state, city, zip_code } = req.body;

  const user_id = req.user._id;

  const address = await ShoppingAddresses.findOne({ user_id });
  if (!address) {
    throw new ApiError(400, "Address is not found");
  }
  address.fullAddress = fullAddress;
  address.state = state;
  address.city = city;
  address.zip_code = zip_code;

  await address.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "updating Address is successfull", { address }));
});

const setDefaultAddress = asyncHandler(async (req, res) => {
  const { addressId } = req.body;

  const address = await ShoppingAddresses.findOne({
    _id: addressId,
    user_id: req.user._id,
  });
  console.log("Address : ", address);

  if (!address) {
    throw new ApiError(404, "Address not found or UnAuthorized");
  }
  await ShoppingAddresses.updateMany(
    { user_id: req.user._id },
    { $set: { isDefault: false } }
  );

  address.isDefault = true;
  await address.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "Set default successfull", { address }));
});

const deleteOneAddress = asyncHandler(async (req, res) => {
  const { addressId } = req.params;
  console.log("addressId : ", addressId);
  const address = await ShoppingAddresses.findOneAndDelete(
    {
      _id: addressId,
      user_id: req.user._id, //insure that the address belong to login user
    },
    {isDeleted: true},
    { new: true }
  );
  console.log("Address : ", address);
  
  if (!address) {
    throw new ApiError(404, "Address does not exist");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Deleting Address successfull.", { address }));
});

const deleteAllAddress = asyncHandler(async (req, res) => {
  // const{addressId} = req.params
  const user_id = req.user._id;
  // console.log("User_id : ",user_id)

  const result = await ShoppingAddresses.deleteMany({ user_id });
  if (result.deletedCount === 0) {
    throw new ApiError(404, "No address is found to delete");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, "Deleting all address successfull", {
        deletedCount: result.deletedCount,
      })
    );
});

export {
  addAddress,
  getAddress,
  updateAddress,
  deleteOneAddress,
  setDefaultAddress,
  deleteAllAddress,
};

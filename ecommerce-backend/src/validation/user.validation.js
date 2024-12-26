import { body, param } from "express-validator";
import { AvailableUserRoles } from "../constent.js";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("fullName")
      .trim()
      .notEmpty()
      .withMessage("fullName is required")
      .isLowercase()
      .withMessage("fullName must be lowercase"),
    body("password").trim().notEmpty().withMessage("Password is required"),
    body("role")
      .optional()
      .isIn(AvailableUserRoles)
      .withMessage("Invalid user role"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").optional().isEmail().withMessage("Email is invalid"),
    body("phoneNo").optional().isMobilePhone().withMessage("Phone number is invalid"),
    body("password").notEmpty().withMessage("password is required")
  ]
}

export { userRegisterValidator, userLoginValidator };

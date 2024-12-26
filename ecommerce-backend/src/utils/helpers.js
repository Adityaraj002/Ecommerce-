import fs from "fs"
import { ApiError } from "./ApiError.js"
export const getMongoosePaginationOption = ({ page = 1, limit = 10, customeLabels }) => {
  return {
    page:Math.max(page,1),
    limit: Math.max(limit, 1),
    pagination: true,
    customeLabels: {
      paginationCount: "serialNumberStartfrom",
      ...customeLabels
    },
  }
}
export const getStaticFilePath = (req, fileName) => {
  return `${req.protocol}://${req.get("host")}/images/${fileName}`
}

export const getLocalPath = (fileName) => {
  return `public/images/${fileName}`
}

export const removefromLocalPath = (localPath) => {
  if (!localPath) {
    throw new ApiError(404,"Local Path does not find ")
  } else {
    fs.unlink(localPath)
  }
}
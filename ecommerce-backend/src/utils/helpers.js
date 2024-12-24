
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
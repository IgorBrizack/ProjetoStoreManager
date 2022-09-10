const errorMap = {
  TRAVEL_NOT_FOUND: 404,
  PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  TRAVEL_CONFLICT: 409,
  PRODUCT_IS_INVALID: 400,
  PRODUCT_SIZE_IS_INVALID: 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
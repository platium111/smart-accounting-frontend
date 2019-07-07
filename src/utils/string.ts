import * as CONSTANTS from "../constants";

export const buildErrorMsg = (
  typeError: string,
  field: string,
  length?: number
) => {
  switch (typeError) {
    case "required" || "valid":
      return `${CONSTANTS.ERROR_REQUIRED_FIELD} "${field}"`;
    case "length":
      return `${CONSTANTS.ERROR_REQUIRED_LENGTH} ${length} từ ở "${field}"`;
    default:
      return `Lỗi nhập trường ${field}`;
  }
};

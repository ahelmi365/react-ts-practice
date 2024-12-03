import { IProductInfoForm } from "../interfaces/inedx";

export const validateProductInfo = (product: IProductInfoForm) => {
  const errors = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  if (!isValidString(product["title"], 5, 25)) {
    errors["title"] = "Title should be at least 5 chars and at most 25 chars";
  }
  if (!isValidString(product["description"], 5, 80)) {
    errors["description"] =
      "Description should be at least 5 chars and at most 80 chars";
  }
  if (!isValidString(product["imageURL"], 5, 200)) {
    errors["imageURL"] =
      "Image-URL should be at least 5 chars and at most 200 chars";
  }
  if (!isValidNumber(product["price"], 1000, 5000)) {
    errors["price"] = "Price should be at least 1000 and at most 5000";
  }
console.log({errors})
  return errors;
};

const isValidString = (str: string, minLen: number, maxLen: number) => {
  return str.trim() && str.length >= minLen && str.length <= maxLen;
};

const isValidNumber = (value: string, min: number, max: number) => {
  return Number(value) && +value >= min && +value <= max;
};

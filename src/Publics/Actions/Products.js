import Axios from "axios";
import UrlServices from "../UrlServices";

export const getAllProduct = () => {
  return {
    type: "GET_ALL_PRODUCT",
    payload: Axios.get(UrlServices + "/todos"),
  };
};

export const changeProduct = (index, action) => {
  return {
    type: "CHANGE_PRODUCT",
    action: action,
    index: index,
  };
};
export const beliProduct = () => {
  return {
    type: "BELI_PRODUCT",
  };
};

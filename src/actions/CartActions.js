import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  EMPTY_CART,
} from "../config/ActionConstants";

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
};

export const removeArticle = (article) => {
  return {
    type: REMOVE_ARTICLE,
    payload: article,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

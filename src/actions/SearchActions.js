import { SEARCH_ITEM, SET_TERM, CLEAR } from "../config/ActionConstants";

export const searchItem = (param, array) => {
  return {
    type: SEARCH_ITEM,
    payload: param,
    arrayToFilter: array,
  };
};

export const setTerm = (term) => {
  return {
    type: SET_TERM,
    payload: term,
  };
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};

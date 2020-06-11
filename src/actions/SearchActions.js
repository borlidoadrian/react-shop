export const searchItem = (param, array) => {
  return {
    type: "search_item",
    payload: param,
    arrayToFilter: array,
  };
};

export const setTerm = (term) => {
  return {
    type: "set_term",
    payload: term,
  };
};

export const clear = () => {
  return {
    type: "clear",
  };
};

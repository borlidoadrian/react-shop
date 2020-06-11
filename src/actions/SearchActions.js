export const searchItem = (param) => {
  return {
    type: "search_item",
    payload: param,
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

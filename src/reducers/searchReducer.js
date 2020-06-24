const initialState = {
  results: [],
  searchTerm: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_ITEM":
      return {
        results: filter(action),
        searchTerm: action.payload,
      };
    case "SET_TERM":
      return {
        results: action.payload !== "" ? state.results : [],
        searchTerm: action.payload,
      };
    case "CLEAR":
      return {
        results: [],
        searchTerm: "",
      };
    default:
      return state;
  }
};

export const searchItem = (param, array) => {
  return {
    type: "SEARCH_ITEM",
    payload: param,
    arrayToFilter: array,
  };
};

export const setTerm = (term) => {
  return {
    type: "SET_TERM",
    payload: term,
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};

const filter = (action) => {
  return action.arrayToFilter
    .reduce(function (accumulator, currentValue) {
      return [...accumulator, ...currentValue.products];
    }, [])
    .filter(function (item) {
      return (
        item.name.toLowerCase().includes(action.payload.toLowerCase()) ||
        item.category.toLowerCase().includes(action.payload.toLowerCase())
      );
    });
};

const initialState = {
  results: [],
  searchTerm: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "search_item":
      return {
        results: filter(action),
        searchTerm: action.payload,
      };
    case "set_term":
      return {
        results: action.payload !== "" ? state.results : [],
        searchTerm: action.payload,
      };
    case "clear":
      return {
        results: [],
        searchTerm: "",
      };
    default:
      return state;
  }
};

function filter(action) {
  return action.arrayToFilter
    .reduce(function (accumulator, currentValue) {
      return [...accumulator, ...currentValue.articles];
    }, [])
    .filter(function (item) {
      return (
        item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
        item.category.toLowerCase().includes(action.payload.toLowerCase())
      );
    });
}

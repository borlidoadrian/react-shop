const initialState = {
  results: [],
  searchTerm: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "search_item":
      return {
        results: [
          {
            title: "Kiwi",
            price: 20,
            category: "Fruit",
            image: "https://i.imgur.com/FPG0aDd.jpg",
            id: 8,
          },
        ],
        searchTerm: action.payload,
      };
    case "set_term":
      return {
        results: state.results,
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

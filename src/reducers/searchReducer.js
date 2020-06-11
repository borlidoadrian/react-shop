const searchState = {
  results: [],
};

export default (state = searchState, action) => {
  switch (action.type) {
    case "search":
      return {
        results: [
          {
            title: "Kiwi",
            price: 20,
            category: "Fruit",
            image: "https://i.imgur.com/FPG0aDd.jpg",
            id: 8,
          },
          {
            title: "Grapefruit",
            price: 25,
            category: "Fruit",
            image: "https://i.imgur.com/YrlKeWd.jpg",
            id: 9,
          },
        ],
      };
    default:
      return state;
  }
};

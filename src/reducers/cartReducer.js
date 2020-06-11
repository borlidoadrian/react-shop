const articleState = {
  articles: [],
  totalPrice: 0,
};

export default (state = articleState, action) => {
  switch (action.type) {
    case "add_article":
      return {
        articles: [...state.articles, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case "remove_article":
      let arr = [...state.articles];
      var index = arr.indexOf(action.payload);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return {
        articles: arr,
        totalPrice: state.totalPrice - action.payload.price,
      };

    case "empty_cart":
      return {
        articles: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};

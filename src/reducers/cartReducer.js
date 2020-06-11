const initialState = {
  articles: [],
  totalPrice: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "add_article":
      return addArticle(state, action);

    case "remove_article":
      return removeArticle(state, action);
    case "empty_cart":
      return {
        articles: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};

function addArticle(state, action) {
  return {
    articles: [...state.articles, action.payload],
    totalPrice: state.totalPrice + action.payload.price,
  };
}

function removeArticle(state, action) {
  let arr = [...state.articles];
  var index = arr.indexOf(action.payload);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return {
    articles: arr,
    totalPrice: state.totalPrice - action.payload.price,
  };
}

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
    articles: contains(state, action.payload)
      ? updateQuantity(state, action.payload.id, "ADD")
      : [...state.articles, { ...action.payload, quantity: 1 }],
    totalPrice: state.totalPrice + action.payload.price,
  };
}

function removeArticle(state, action) {
  let arr = [...state.articles];
  var index = state.articles.findIndex(
    (element) => element.id == action.payload.id
  );
  arr.splice(index, 1);

  return {
    articles:
      contains(state, action.payload) && state.articles[index].quantity > 1
        ? updateQuantity(state, action.payload.id, "SUBSTRACT")
        : arr,
    totalPrice: state.totalPrice - action.payload.price,
  };
}

function updateQuantity(state, id, type) {
  let index = state.articles.findIndex((element) => element.id == id);
  let array = [...state.articles];

  array[index] = {
    ...state.articles[index],
    quantity:
      type === "ADD"
        ? state.articles[index].quantity + 1
        : state.articles[index].quantity - 1,
  };

  return array;
}

function contains(state, article) {
  // Checks if state contains the article
  let articleExists = false;
  state.articles.forEach((p) => {
    if (article.id === p.id) {
      articleExists = true;
    }
  });
  return articleExists;
}

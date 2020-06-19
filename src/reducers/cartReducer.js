import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  ADD,
  SUBSTRACT,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
} from "../config/ActionConstants";

const initialState = {
  articles: [],
  totalPrice: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return addArticle(state, action);
    case REMOVE_ARTICLE:
      return removeArticle(state, action);
    case CHECKOUT_SUCCESS:
      return state;
    case CHECKOUT_FAILURE:
      return state;
    default:
      return state;
  }
};

function addArticle(state, action) {
  return {
    articles: contains(state, action.payload)
      ? updateQuantity(state, action.payload.id, ADD)
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
        ? updateQuantity(state, action.payload.id, SUBSTRACT)
        : arr,
    totalPrice: state.totalPrice - action.payload.price,
  };
}

function updateQuantity(state, id, type) {
  return state.articles.map((art) =>
    art.id === id
      ? { ...art, quantity: art.quantity + (type === ADD ? 1 : -1) }
      : art
  );
}

function contains(state, article) {
  // Checks if state contains the article
  return state.articles.findIndex((element) => element.id == article.id) !== -1;
}

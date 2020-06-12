import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  EMPTY_CART,
  ADD,
  SUBSTRACT,
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
    case EMPTY_CART:
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
  let index = state.articles.findIndex((element) => element.id == id);
  let array = [...state.articles];

  array[index] = {
    ...state.articles[index],
    quantity:
      type === ADD
        ? state.articles[index].quantity + 1
        : state.articles[index].quantity - 1,
  };

  return array;
}
function contains(state, article) {
  // Checks if state contains the article
  return state.articles.findIndex((element) => element.id == article.id) !== -1;
}

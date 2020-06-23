import api from "../api";

const initialState = {
  articles: [],
  totalPrice: 0,
  refresh: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return add(state, action);
    case "REMOVE_ARTICLE":
      return remove(state, action);
    case "CHECKOUT_FULFILLED":
      return { articles: [], totalPrice: 0, refresh: !state.refresh };
    case "CHECKOUT_REJECTED":
      return state;
    case "CHECKOUT_PENDING":
      return state;
    default:
      return state;
  }
};

export const checkout = async (dispatch, getState) => {
  await dispatch({
    type: "CHECKOUT",
    payload: api.checkout(getState().cart.articles, getState().auth.token),
  });
};

export const addArticle = (article) => {
  return {
    type: "ADD_ARTICLE",
    payload: article,
  };
};

export const removeArticle = (article) => {
  return {
    type: "REMOVE_ARTICLE",
    payload: article,
  };
};

function add(state, action) {
  return {
    articles: contains(state, action.payload)
      ? updateQuantity(state, action.payload.id, "ADD")
      : [...state.articles, { ...action.payload, quantity: 1 }],
    totalPrice: state.totalPrice + action.payload.price,
  };
}

function remove(state, action) {
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
  return state.articles.map((art) =>
    art.id === id
      ? { ...art, quantity: art.quantity + (type === "ADD" ? 1 : -1) }
      : art
  );
}

function contains(state, article) {
  // Checks if state contains the article
  return state.articles.findIndex((element) => element.id == article.id) !== -1;
}

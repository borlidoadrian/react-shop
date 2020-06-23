import api from "../api";

const initialState = {
  products: { categories: [] },
  promoted: [],
  purchases: [],
  error: "",
  loadingProducts: true,
  loadingPromoted: true,
  loadingPurchases: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_FULFILLED":
      return {
        ...state,
        products: formatResponse(action.payload),
        loadingProducts: false,
      };

    case "GET_PRODUCTS_REJECTED":
      return { ...state, error: "GetProducts Failed", loadingProducts: false };

    case "GET_PROMOTED_FULFILLED":
      return {
        ...state,
        promoted: action.payload.json(),
        loadingPromoted: false,
      };

    case "GET_PROMOTED_REJECTED":
      return { ...state, error: "GetPromoted Failed", loadingPromoted: false };

    case "GET_PURCHASES_FULFILLED":
      return {
        ...state,
        purchases: action.payload.json(),
        loadingPurchases: false,
      };

    case "GET_PURCHASES_REJECTED":
      return {
        ...state,
        error: "GetPurchases Failed",
        loadingPurchases: false,
      };

    default:
      return state;
  }
};

export const getProducts = async (dispatch, getState) => {
  await dispatch({
    type: "GET_PRODUCTS",
    payload: api.getProducts(getState().auth.token),
  });
};

export const getPromoted = async (dispatch, getState) => {
  await dispatch({
    type: "GET_PROMOTED",
    payload: api.getPromoted(getState().auth.token),
  });
};

export const getPurchases = async (dispatch, getState) => {
  await dispatch({
    type: "GET_PURCHASES",
    payload: api.getPurchases(getState().auth.token),
  });
};

function formatResponse(response) {
  var productsByCategory = {};
  var products = {
    categories: [],
  };
  json = response.json();
  json.forEach((product) => {
    product.price = Math.round(product.price * 10) / 10;
    var name = product.category;
    name in productsByCategory
      ? productsByCategory[name].push(product)
      : (productsByCategory[name] = [product]);
  });
  for (var key in productsByCategory) {
    if (productsByCategory.hasOwnProperty(key)) {
      products.categories.push({
        name: key,
        products: productsByCategory[key],
      });
    }
  }
  return products;
}

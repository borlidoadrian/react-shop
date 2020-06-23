import { apiGetProducts, apiGetPromoted, apiGetPurchases } from "../api";

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
        promoted: action.payload,
        loadingPromoted: false,
      };

    case "GET_PROMOTED_REJECTED":
      return { ...state, error: "GetPromoted Failed", loadingPromoted: false };

    case "GET_PURCHASES_FULFILLED":
      return {
        ...state,
        purchases: action.payload,
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

export const getProducts = () => async (dispatch, getState) => {
  await dispatch({
    type: "GET_PRODUCTS",
    payload: apiGetProducts(getState().auth.token),
  });
};

export const getPromoted = () => async (dispatch, getState) => {
  await dispatch({
    type: "GET_PROMOTED",
    payload: apiGetPromoted(getState().auth.token),
  });
};

export const getPurchases = () => async (dispatch, getState) => {
  await dispatch({
    type: "GET_PURCHASES",
    payload: apiGetPurchases(getState().auth.token),
  });
};

function formatResponse(json) {
  var productsByCategory = {};
  var products = {
    categories: [],
  };
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

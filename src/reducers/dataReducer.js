import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PROMOTED_SUCCESS,
  GET_PROMOTED_FAILURE,
  GET_PURCHASES_SUCCESS,
  GET_PURCHASES_FAILURE,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
} from "../config/ActionConstants";

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
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: formatJson(action.payload),
        loadingProducts: false,
      };

    case GET_PRODUCTS_FAILURE:
      return { ...state, error: "GetProducts Failed", loadingProducts: false };

    case GET_PROMOTED_SUCCESS:
      return { ...state, promoted: action.payload, loadingPromoted: false };

    case GET_PROMOTED_FAILURE:
      return { ...state, error: "GetPromoted Failed", loadingPromoted: false };

    case GET_PURCHASES_SUCCESS:
      console.log("SUCCESS", action.payload);
      return { ...state, purchases: action.payload, loadingPurchases: false };

    case GET_PURCHASES_FAILURE:
      console.log("FAILURE", action.payload);
      return {
        ...state,
        error: "GetPurchases Failed",
        loadingPurchases: false,
      };

    case CHECKOUT_SUCCESS:
      return state;

    case CHECKOUT_FAILURE:
      return state;

    default:
      return state;
  }
};

function formatJson(json) {
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

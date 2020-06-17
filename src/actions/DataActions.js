import {
  BASE_URL,
  CHECKOUT,
  PRODUCTS,
  PROMOTED,
  PURCHASES,
} from "../config/ApiConstants";
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PROMOTED_SUCCESS,
  GET_PROMOTED_FAILURE,
  GET_PURCHASES_SUCCESS,
  GET_PURCHASES_FAILURE,
} from "../config/ActionConstants";

export const getProducts = () => {
  return (dispatch) => {
    fetch(BASE_URL + PRODUCTS, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: formatJson(json),
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PRODUCTS_FAILURE,
          payload: error,
        });
      });
  };
};

export const getPromoted = () => {
  return request(PROMOTED, "GET", GET_PROMOTED_SUCCESS, GET_PROMOTED_FAILURE);
};

export const getPurchases = () => {
  return request(
    PURCHASES,
    "GET",
    GET_PURCHASES_SUCCESS,
    GET_PURCHASES_FAILURE
  );
};

function request(path, method, successType, errroType) {
  return (dispatch) => {
    fetch(BASE_URL + path, {
      method: method,
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: successType,
          payload: json,
        });
      })
      .catch((error) => {
        dispatch({
          type: errroType,
          payload: error,
        });
      });
  };
}

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

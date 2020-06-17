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
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
} from "../config/ActionConstants";

const headers = new Headers({
  Authorization: "Bearer " + login,
  "Content-Type": "application/x-www-form-urlencoded",
});

export const login = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 3000 + 500)
  );
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  return Array.from({ length: 36 }, (_, i) => i)
    .map(() => characters.charAt(Math.floor(Math.random() * charactersLength)))
    .join("");
};

export const getProducts = () => {
  return (dispatch) => {
    fetch(BASE_URL + PRODUCTS, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: json,
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

export const checkout = () => {
  return request(CHECKOUT, "POST", CHECKOUT_SUCCESS, CHECKOUT_FAILURE);
};

function request(path, method, successType, errorType) {
  return (dispatch) => {
    fetch(BASE_URL + path, {
      method: method,
      headers: new Headers({
        Authorization: "Bearer " + login,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
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
          type: errorType,
          payload: error,
        });
      });
  };
}

import {
  BASE_URL,
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
import AsyncStorage from "@react-native-community/async-storage";

export const getProducts = () => {
  return (dispatch) => {
    getData("@token").then((token) => {
      fetch(BASE_URL + PRODUCTS, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
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

function request(path, method, successType, errorType) {
  return (dispatch) => {
    getData("@token").then((token) => {
      fetch(BASE_URL + path, {
        method: method,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
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
    });
  };
}

const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
};

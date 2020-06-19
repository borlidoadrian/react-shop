import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
} from "../config/ActionConstants";
import { BASE_URL, CHECKOUT } from "../config/ApiConstants";
import AsyncStorage from "@react-native-community/async-storage";

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
};

export const removeArticle = (article) => {
  return {
    type: REMOVE_ARTICLE,
    payload: article,
  };
};

export const checkout = () => {
  return (dispatch) => {
    getData("@token").then((token) => {
      fetch(BASE_URL + CHECKOUT, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          cart: [
            {
              product_id: 1,
              quantity: 1,
            },
            {
              product_id: 2,
              quantity: 1,
            },
          ],
        }),
      })
        .then((response) => {
          dispatch({
            type: CHECKOUT_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          dispatch({
            type: CHECKOUT_FAILURE,
            payload: error,
          });
        });
    });
  };
};

const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
};

import AsyncStorage from "@react-native-community/async-storage";
import api from "../api";

const initialState = {
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return { token: " " };
    case "LOGIN_FULFILLED":
      return { token: action.payload };
    case "LOGIN_REJECTED":
      return state;
    default:
      return state;
  }
};

export const login = async (dispatch, getState) => {
  await dispatch({
    type: "LOGIN",
    payload: api.login(),
  }).catch(() => {});

  const token = getState().auth.token;
  console.log(token);

  if (token) {
    storeToken(token);
    dispatch(api.getProducts(token));
    dispatch(api.getPromoted(token));
  } else {
    removeToken();
  }
};

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("@token", token);
  } catch (e) {}
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("@token");
  } catch (e) {}
};

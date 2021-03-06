import AsyncStorage from "@react-native-community/async-storage";
import { apiLogin } from "../api";
import { getProducts, getPromoted } from "./dataReducer";

const initialState = {
  token: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return { token: "", error: "" };
    case "LOGIN_FULFILLED":
      return { token: action.payload, error: "" };
    case "LOGIN_REJECTED":
      return { token: "", error: "Login Failed" };
    default:
      return state;
  }
};

export const login = () => async (dispatch, getState) => {
  await dispatch({
    type: "LOGIN",
    payload: apiLogin(),
  }).catch(() => {});

  const token = getState().auth.token;
  if (token) {
    storeToken(token);
    dispatch(getProducts(token));
    dispatch(getPromoted(token));
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

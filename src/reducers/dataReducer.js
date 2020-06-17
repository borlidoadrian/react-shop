import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PROMOTED_SUCCESS,
  GET_PROMOTED_FAILURE,
  GET_PURCHASES_SUCCESS,
  GET_PURCHASES_FAILURE,
} from "../config/ActionConstants";

const initialState = {
  products: { categories: [] },
  promoted: [],
  purchases: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };

    case GET_PRODUCTS_FAILURE:
      return { ...state, error: "GetProducts Failed" };

    case GET_PROMOTED_SUCCESS:
      return { ...state, promoted: action.payload };

    case GET_PROMOTED_FAILURE:
      return { ...state, error: "GetPromoted Failed" };

    case GET_PURCHASES_SUCCESS:
      return { ...state, purchases: action.payload };

    case GET_PURCHASES_FAILURE:
      return { ...state, error: "GetPurchases Failed" };

    default:
      return state;
  }
};

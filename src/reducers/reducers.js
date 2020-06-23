import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import cartReducer from "./cartReducer";
import searchReducer from "./searchReducer";
import authReducer from "./authReducer";

export default combineReducers({
  data: dataReducer,
  cart: cartReducer,
  search: searchReducer,
  auth: authReducer,
});

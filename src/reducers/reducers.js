import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import cartReducer from "./cartReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  data: dataReducer,
  cart: cartReducer,
  search: searchReducer,
});

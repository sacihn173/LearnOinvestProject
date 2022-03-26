import searchData from "./searchDataReducer";
import marketOpen from "./marketOpen";
import portfolio from "./portfolio";
import balance from "./balance"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  portfolio,
  searchData,
  marketOpen,
  balance,
});

export default rootReducer;

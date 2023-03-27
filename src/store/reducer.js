import { combineReducers } from "redux";
import accountReducer from "./reducers/accountReducer";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
  account: accountReducer,
  user: userReducer,
});
export default reducers;

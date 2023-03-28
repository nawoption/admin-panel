import { combineReducers } from "redux";
const loginAction = (state = false, action) => {
  switch (action.type) {
    case "login":
      return (state = action.payload);
    case "logout":
      return (state = action.payload);
    default:
      return state;
  }
};

const reducer = combineReducers({
  loginedIn: loginAction,
});
export default reducer

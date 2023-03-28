import { combineReducers } from "redux";
const productReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return state=action.payload;
    case "remove":
      return state.filter((p) => p.id != action.payload.id);
    default:
      return state;
  }
};
const reducers = combineReducers({
  products: productReducer,
});
export default reducers
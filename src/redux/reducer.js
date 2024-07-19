import { combineReducers } from "redux";

const initialData = {
  title1: "title one",
  title2: "title two",
  title3: "title three",
  para1:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non itaque veniam hic similique nemo sapiente minima, ipsa quia iure labore doloremque necessitatibus tenetur rerum, nobis blanditiis? Ipsa quos maxime vitae.",
};

const siteReducer = (state = initialData, action) => {
  switch (action.type) {
    case "add":
      return (state = action.payload);
    case "reduce":
      return (state = {});
    default:
      return state;
  }
};
const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case "addUser":
      return (state = payload);
    case "removeUser":
      return (state = payload);
    default:
      return state;
  }
};
const pageReducer = (state = { type: "cat", id: '644f67656ca3969b9830ff5b',title:'Mandalay' }, { type, payload }) => {
  switch (type) {
    case "changeCat":
      return (state = payload);
    default:
      return state;
  }
};

const reducer = combineReducers({
  siteData: siteReducer,
  userData: userReducer,
  pageData: pageReducer,
});
export default reducer;

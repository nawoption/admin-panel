export const userAdd = (payload) => {
  return {
    type: "addUser",
    payload: payload,
  };
};
export const userRemove = (payload) => {
  return {
    type: "removeUser",
    payload: payload,
  };
};
export const changeCat = (payload) => {
  return {
    type: "changeCat",
    payload: payload,
  };
};

const actions = {
  userAdd,
  userRemove,
  changeCat,
};
export default actions;

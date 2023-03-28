export const add = (product) => {
  return {
    type: "add",
    payload: product,
  };
};
export const remove = (product) => {
  return {
    type: "remove",
    payload: product,
  };
};

const actions = {
  add,
  remove,
};
export default actions;

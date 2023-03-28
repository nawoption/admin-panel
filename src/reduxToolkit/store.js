import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "./loginReducers";

export const store = configureStore({
  reducer: {
    login: loginReducers,
  },
});

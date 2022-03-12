import { configureStore } from "@reduxjs/toolkit";
import authTokenReducer from "../reducers/authToken";

export const store = configureStore({
  reducer: {
    authToken: authTokenReducer,
  },
});

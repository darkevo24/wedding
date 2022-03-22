import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userData: null,
  openAlert: false,
  errorMessage: "",
};

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    insertToken: (state, action) => {
      state.token = action.payload;
    },
    insertUserData: (state, action) => {
      state.userData = action.payload;
    },
    setOpenAlert: (state, action) => {
      state.openAlert = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { insertToken, insertUserData, setOpenAlert, setErrorMessage } = authTokenSlice.actions;

export default authTokenSlice.reducer;

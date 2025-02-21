// src/redux/authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  repeatPassword: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRepeatPassword: (state, action) => {
      state.repeatPassword = action.payload;
    },
  },
});

export const { setEmail, setPassword, setRepeatPassword } = authSlice.actions;

export default authSlice.reducer;

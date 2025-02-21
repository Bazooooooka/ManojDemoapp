// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    //    profile: profileReducer,  // Name the state slice as 'profile'
  },
});

export default store;

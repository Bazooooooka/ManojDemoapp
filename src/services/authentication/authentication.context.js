import React, { useState, createContext, useRef } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

import { loginRequest } from "./authentication.service";
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [viewLoad, setViewLoad] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = useRef(getAuth()).current;

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setViewLoad(false);
      console.log("on auth chnage false");
    } else {
      // setViewLoad(false);
      console.log("on auth chnage true");
    }
  });

  const onLogin = (email, password) => {
    console.log("login method hit");
    setViewLoad(true);
    setTimeout(() => {
      console.log("is loading true = ", viewLoad);
      loginRequest(auth, email, password)
        .then((u) => {
          setUser(u);
          setViewLoad(false);
          console.log("is loading false = ", viewLoad);
          console.log("success");
        })
        .catch((e) => {
          setViewLoad(false);
          console.log("is loading error= ", viewLoad);
          setError(e.toString());
        });
    }, 1000);
  };

  const onRegister = (email, password, repeatedPassword) => {
    setViewLoad(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setViewLoad(false);
      })
      .catch((e) => {
        setViewLoad(false);
        setError(e.toString());
      });
  };
  //LhKeS1gaumXuw1oCeC5gTbJzaHh2 test@test.com
  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        viewLoad,
        error,
        onLogin,
        onRegister,
        onLogout,
        checkUser: onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

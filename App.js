import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructre/theme";

//Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructre/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { initializeApp } from "firebase/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const firebaseConfig = {
  apiKey: "AIzaSyCMAp3P0Gn89eWXNi5kOpsFOjA-_Qk0Muc",
  authDomain: "mealstogo-b79a5.firebaseapp.com",
  projectId: "mealstogo-b79a5",
  storageBucket: "mealstogo-b79a5.appspot.com",
  messagingSenderId: "456772287905",
  appId: "1:456772287905:web:972d8f7948e3b8c9b31fe0",
  measurementId: "G-0KV4ZMSCXY",
};
initializeApp(firebaseConfig);

const queryClient = new QueryClient();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <AuthenticationContextProvider>
              <Navigation />
            </AuthenticationContextProvider>
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

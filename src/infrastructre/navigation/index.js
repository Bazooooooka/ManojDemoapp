import React from "react";
import { AppNavigatore } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigatore /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

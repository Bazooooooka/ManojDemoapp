import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountSetting } from "../../features/accounts/account.screen";
import { RegisterScreen } from "../../features/accounts/register.screen";
import { LoginScreenView } from "../../features/accounts/login.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Main"
        component={AccountSetting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreenView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );

  // return (
  //   <SafeArea>
  //     <ViewColored>
  //       <Text>hello Screen</Text>
  //     </ViewColored>
  //   </SafeArea>
  // );
};

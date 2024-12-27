import React from "react";
import { Text } from "react-native-paper";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScereen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurantDetails.screen";
const restaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <restaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <restaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScereen}
      />
      <restaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </restaurantStack.Navigator>
  );
};

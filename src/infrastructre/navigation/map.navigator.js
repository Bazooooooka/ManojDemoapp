import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { MapViewScreen } from "../../features/Map/screens/restaurantMap.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurantDetails.screen";
const settingStack = createStackNavigator();

export const MapNavigator = ({ route, navigation }) => {
  return (
    <settingStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <settingStack.Screen
        name="Map"
        component={MapViewScreen}
        options={{ headerShown: false }}
      />
      <settingStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{ headerShown: false }}
      />
    </settingStack.Navigator>
  );
};

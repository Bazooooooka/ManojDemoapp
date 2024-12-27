import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/setting/screens/setting.screen";
import { FavouritesScreen } from "../../features/favourites/screens/favourites.screen";
import { CameraScreen } from "../../features/setting/screens/camera.screen";
import { FetchDataScreen } from "../../features/setting/screens/fetchApiScreen";
const settingStack = createStackNavigator();

export const SettingNavigator = ({ route, navigation }) => {
  return (
    <settingStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <settingStack.Screen name="Settingss" component={SettingsScreen} />
      <settingStack.Screen name="Favourites" component={FavouritesScreen} />
      <settingStack.Screen name="FetchData" component={FetchDataScreen} />

      <settingStack.Screen name="Camera" component={CameraScreen} />
    </settingStack.Navigator>
  );
};

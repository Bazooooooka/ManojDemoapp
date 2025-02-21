import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/setting/screens/setting.screen";
import { FavouritesScreen } from "../../features/favourites/screens/favourites.screen";
import { CameraScreen } from "../../features/setting/screens/camera.screen";
import { FetchDataScreen } from "../../features/setting/screens/fetchApiScreen";
import { InfiniteQueries } from "../../features/setting/screens/InfiniteQueries";
import { PaginatedQueries } from "../../features/setting/screens/PaginatedQueries";
import { PostDetailsRQ } from "../../features/setting/screens/PostDetailsRQ";
import { PostsRQ } from "../../features/setting/screens/PostsRQ";
import { PostTraditional } from "../../features/setting/screens/PostsTraditional";
import { HelloWorld } from "../../features/setting/screens/helloWorld";
const settingStack = createStackNavigator();

export const SettingNavigator = ({ route, navigation }) => {
  return (
    <settingStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <settingStack.Screen
        name="Settingss"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <settingStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ headerShown: false }}
      />
      <settingStack.Screen
        name="FetchData"
        component={FetchDataScreen}
        options={{ headerShown: false }}
      />
      <settingStack.Screen
        name="HelloWorld"
        component={HelloWorld}
        options={{ headerShown: false }}
      />

      <settingStack.Screen
        name="PaginatedQueries"
        component={PaginatedQueries}
        options={{ headerShown: false }}
      />
      <settingStack.Screen
        name="InfiniteQueries"
        component={InfiniteQueries}
        options={{ headerShown: false }}
      />

      <settingStack.Screen
        name="PostDetailsRQ"
        component={PostDetailsRQ}
        options={{ headerShown: false }}
      />
      <settingStack.Screen
        name="PostsRQ"
        component={PostsRQ}
        options={{ headerShown: false }}
      />
      <settingStack.Screen
        name="PostTraditional"
        component={PostTraditional}
        options={{ headerShown: false }}
      />
      <settingStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
    </settingStack.Navigator>
  );
};

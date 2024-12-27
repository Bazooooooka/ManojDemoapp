import React, { useContext, useState } from "react";
import { SafeArea } from "../../../features/components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import styled from "styled-components/native";

const SettingsItem = styled(List.Item)`
  align-items: center;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  // useFocusEffect(() => {
  //   getProfilePicture(user);
  // }, [user]);

  useFocusEffect(
    React.useCallback(() => {
      // Your code here
    }, [user])
  );
  return (
    <SafeArea>
      <List.Section>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
            )}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="#2182BD"
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>

        <SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <SettingsItem
          style={{ padding: 16 }}
          title="Api Data Fetch"
          description="Fetch Data"
          left={(props) => (
            <List.Icon {...props} color="black" icon="web-check" />
          )}
          onPress={() => navigation.navigate("FetchData")}
        />

        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

import {
  CameraView,
  CameraType,
  useCameraPermissions,
  Camera,
} from "expo-camera";
import { useState, useEffect, useContext } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";

import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraContainer = styled(CameraView)`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
`;

export const ButtonContainer = styled(CameraView)`
  width: 50%;
  height: 20%;
  align-self: flex-end;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
`;
export const ButtonContainer2 = styled(CameraView)`
  width: 50%;
  height: 20%;
  align-self: flex-end;
  justify-content: center;
  background-color: rgba(255, 7, 255, 0.7);
`;

export const TakePictureButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  justify-content: flex-start;
  margin-left: -40;
`;
export const FlipCameraButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  justify-content: flex-start;
`;

export const CameraScreen = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const { status } = await requestPermission();
      // setHasPermission(status === "granted");
    })();
  }, []);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <CameraContainer facing={facing}>
      <ButtonContainer>
        <FlipCameraButton onPress={toggleCameraFacing}>
          <Avatar.Icon size={80} icon="camera-flip-outline" />
        </FlipCameraButton>
      </ButtonContainer>
      <ButtonContainer2>
        <TakePictureButton onPress={snap}>
          <Avatar.Icon size={80} icon="camera-iris" />
        </TakePictureButton>
      </ButtonContainer2>
    </CameraContainer>
  );
};
const snap = async () => {
  const photo = await take;
  AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
  navigation.goBack();
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

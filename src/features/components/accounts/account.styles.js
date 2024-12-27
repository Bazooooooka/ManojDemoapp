import React from "react";

import styled from "styled-components/native";
import { colors } from "../../../infrastructre/theme/colors";
import { Button, TextInput } from "react-native-paper";
import LottieView from "lottie-react-native";

export const ImageBackgroundView = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  align-items: center;
`;
export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;
export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
export const TextInputField = styled(TextInput)`
  width: 300px;
`;

export const TitleText = styled.Text`
  font-size: 25px;
  font-styel: ;
`;
export const AnimationWrapper = styled(LottieView)`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
  align-items: center;
`;

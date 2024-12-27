import React, { useRef } from "react";
import { LoginScreenView } from "./login.screen";
import { RegisterScreen } from "./register.screen";
import {
  ImageBackgroundView,
  AccountCover,
  AccountContainer,
  AuthButton,
  TitleText,
  AnimationWrapper,
} from "../components/accounts/account.styles";
import { Spacer } from "../components/spacer/spacer.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
export const AccountSetting = ({ navigation }) => {
  const { checkUser, error, viewLoad } = useContext(AuthenticationContext);

  return (
    <ImageBackgroundView>
      <AccountCover>
        <AnimationWrapper
          autoPlay
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../../../assets/watermelon.json")}
        ></AnimationWrapper>

        <TitleText>Meals To Go</TitleText>

        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <Spacer position="top" size="large">
            {!viewLoad ? (
              <AuthButton
                icon="email"
                mode="contained"
                onPress={() => navigation.navigate("Register")}
              >
                Register
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={MD2Colors.blue300} />
            )}
          </Spacer>
        </AccountContainer>
      </AccountCover>
    </ImageBackgroundView>
  );
};

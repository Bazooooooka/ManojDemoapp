import React from "react";
import {
  ImageBackgroundView,
  AccountCover,
  AccountContainer,
  AuthButton,
  TextInputField,
  TitleText,
  ErrorContainer,
} from "../components/accounts/account.styles";
import { Spacer } from "../components/spacer/spacer.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Text } from "../components/typography/text.component";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
} from "../../../src/redux/authentication/authSlice"; // Import Redux actions

export const LoginScreenView = ({ navigation }) => {
  const { checkUser, error, viewLoad } = useContext(AuthenticationContext);
  //Replaced By Redux
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth); // Select state from Redux store

  useEffect(() => {
    // Reset the form when navigating to the screen
    return () => {
      dispatch(setEmail(""));
      dispatch(setPassword(""));
    };
  }, []);

  return (
    <ImageBackgroundView>
      <AccountCover>
        <TitleText>Meals To Go</TitleText>
        <AccountContainer>
          <TextInputField
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            // onChangeText={(u) => setEmail(u)} Using State Method
            onChangeText={(u) => dispatch(setEmail(u))} // Dispatch action to update email
          />
          <TextInputField
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            // onChangeText={(p) => setPassword(p)}  Using State Method
            onChangeText={(p) => dispatch(setPassword(p))} // Dispatch action to update password
          />
          {error && (
            <Spacer position="top" size="large">
              <ErrorContainer>
                <Text variant="error"> {error} </Text>
              </ErrorContainer>
            </Spacer>
          )}
          <Spacer position="top" size="large">
            {!viewLoad ? (
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => checkUser(email, password)}
              >
                Login
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={MD2Colors.blue300} />
            )}
          </Spacer>
        </AccountContainer>
        <Spacer position="top" size="large">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountCover>
    </ImageBackgroundView>
  );
};

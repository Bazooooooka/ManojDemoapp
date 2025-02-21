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
import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Text } from "../components/typography/text.component";

import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  setRepeatPassword,
} from "../../../src/redux/authentication/authSlice"; // Import Redux actions

export const RegisterScreen = ({ navigation }) => {
  const { checkUser, error, onRegister } = useContext(AuthenticationContext);

  //Replaced by redux
  //const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [repeatPassword, setRepeatPassword] = React.useState("");
  const dispatch = useDispatch();

  const { email, password, repeatPassword } = useSelector(
    (state) => state.auth
  ); // Select state from Redux store

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
            //onChangeText={(u) => setEmail(u)}
            onChangeText={(u) => dispatch(setEmail(u))} // Dispatch setEmail action
          />
          <TextInputField
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            // onChangeText={(p) => setPassword(p)}
            onChangeText={(p) => dispatch(setPassword(p))} // Dispatch setPassword action
          />
          <TextInputField
            label="Repeat Password"
            value={repeatPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            //onChangeText={(p) => setRepeatPassword(p)}
            onChangeText={(p) => dispatch(setRepeatPassword(p))} // Dispatch setRepeatPassword action
          />
          {error && (
            <Spacer position="top" size="large">
              <ErrorContainer>
                <Text variant="error"> {error} </Text>
              </ErrorContainer>
            </Spacer>
          )}
          <Spacer position="top" size="large">
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatPassword)}
            >
              Register
            </AuthButton>
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

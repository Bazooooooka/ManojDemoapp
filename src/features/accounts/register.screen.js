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
export const RegisterScreen = ({ navigation }) => {
  const { checkUser, error, onRegister } = useContext(AuthenticationContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");

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
            onChangeText={(u) => setEmail(u)}
          />
          <TextInputField
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setPassword(p)}
          />
          <TextInputField
            label="Repeat Password"
            value={repeatPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setRepeatPassword(p)}
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

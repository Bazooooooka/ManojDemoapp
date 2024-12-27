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

import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Text } from "../components/typography/text.component";

export const LoginScreenView = ({ navigation }) => {
  const { checkUser, error, viewLoad } = useContext(AuthenticationContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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

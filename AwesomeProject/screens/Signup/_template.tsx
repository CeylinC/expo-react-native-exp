import { View } from "react-native";
import {
  Button,
  Container,
  Header,
  Subtitle,
  TextField,
} from "../../components/index";
import { en } from "../../utils/lang/en";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";
import { useState } from "react";
import { ErrorText } from "./_style";
import {
  emailControl,
  passwordAgainControl,
  passwordControl,
} from "../../utils/functions";

export function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordAgain, setPasswordAgain] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const formControl = () => {
    let errors = "";
    if (!emailControl(email)) {
      errors = en.Error.email;
    }
    if (!passwordControl(password)) {
      errors =
        errors !== ""
          ? errors + `, ${en.Error.password}`
          : errors + en.Error.password;
    }
    if (!passwordAgainControl(password, passwordAgain)) {
      errors =
        errors !== ""
          ? errors + `, ${en.Error.passwordAgain}`
          : errors + en.Error.passwordAgain;
    }
    setErrorMessage(errors);
    if (errors === "") {
      navigation.navigate("Home");
    }
  };

  return (
    <Container>
      <View>
        <Header text={en.Signup.title} />
        <Subtitle text={en.Signup.subTitle} />
      </View>
      <View>
        <TextField
          setValue={setEmail}
          placeholder={en.Input.email}
          type="email"
        />
        <TextField
          setValue={setPassword}
          placeholder={en.Input.password}
          type="password"
        />
        <TextField
          setValue={setPasswordAgain}
          placeholder={en.Input.passwordAgain}
          type="password"
        />
      </View>
      <View>
        <ErrorText>{errorMessage}</ErrorText>
        <Button text={en.Signup.button} onPress={() => formControl()} />
        <Button
          text={en.Signup.login}
          type="text"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </Container>
  );
}

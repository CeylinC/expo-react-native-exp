import { View } from "react-native";
import {
  Button,
  Container,
  Header,
  Subtitle,
  TextField,
} from "../../components/index";
import { en } from "../../utils/lang/en";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";
import { useState } from "react";
import { ErrorText } from "./_style";

const user = {
  email: "caltepeceylin@gmail.com",
  password: "123456",
};

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const formControl = () => {
    setErrorMessage("");
    if (email !== user.email) {
      setErrorMessage("Invalid User");
    } else if (password !== user.password) {
      setErrorMessage("Invalid Password");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <Container>
      <View>
        <Header text={en.Login.title} />
        <Subtitle text={en.Login.subTitle} />
      </View>
      <View>
        <TextField setValue={setEmail} placeholder={en.Input.email} type="email" />
        <TextField
          setValue={setPassword}
          placeholder={en.Input.password}
          type="password"
        />
        <Button
          text={en.Login.forgetPassword}
          type="text"
          align="left"
          onPress={() => navigation.navigate("ForgetPassword")}
        />
      </View>
      <View>
        <ErrorText>{errorMessage}</ErrorText>
        <Button text={en.Login.button} onPress={() => formControl()} />
        <Button
          text={en.Login.signup}
          type="text"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </Container>
  );
}

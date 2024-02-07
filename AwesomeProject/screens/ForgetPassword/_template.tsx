import { Container, Header, Subtitle } from "../../components/index";
import { en } from "../../utils/lang/en";

export function ForgetPassword() {
  return (
    <Container justifyAlign="center">
      <Header text={en.ForgetPassword.title} />
      <Subtitle text={en.ForgetPassword.subTitle} />
    </Container>
  );
}

import { Container, Header, Subtitle } from "../../components/index";
import { en } from "../../utils/lang/en";

export function Home() {
  return (
    <Container justifyAlign="center">
      <Header text={en.Home.title} />
      <Subtitle text={en.Home.subTitle} />
    </Container>
  );
}

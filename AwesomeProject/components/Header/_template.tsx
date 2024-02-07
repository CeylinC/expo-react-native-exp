import { IHeader } from "./_type";
import { Title } from "./_style";

export function Header({ text }: IHeader) {
  return (
    <Title>
      {text}
    </Title>
  );
}

import { ISubtitle } from "./_type";
import { Text } from "./_style";

export function Subtitle({ text }: ISubtitle) {
  return (
    <Text>
      {text}
    </Text>
  );
}

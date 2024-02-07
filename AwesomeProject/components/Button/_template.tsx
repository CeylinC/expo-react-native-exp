import { IButton } from "./_type";
import { ButtonContainer, ButtonText } from "./_style";

export function Button({ text, type = "filled", align = "center", onPress }: IButton) {
  return (
    <ButtonContainer
      type={type}
      onPress={onPress}
    >
      <ButtonText type={type} align={align}>{text}</ButtonText>
    </ButtonContainer>
  );
}

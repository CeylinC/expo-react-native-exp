export interface IButton {
  text: string;
  type?: "filled" | "text";
  align?: "left" | "center" | "right";
  onPress: () => void;
}

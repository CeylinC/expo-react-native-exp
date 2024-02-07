import styled from "styled-components/native";

export const ButtonContainer = styled.Pressable<{ type: string }>`
  margin: 10px 0;
  padding: ${(props) =>
    props.type === "filled" ? "10px 20px" : "0 10px"};
  border-radius: 15px;
  background-color: ${(props) =>
    props.type === "filled" ? "#4858f5" : "transparent"};
  width: 250px;
`;
export const ButtonText = styled.Text<{
  type: string;
  align: "left" | "center" | "right";
}>`
  color: white;
  text-align: ${(props) => props.align};
  ${(props) => (props.type === "text" ? "text-decoration: underline" : "")}
`;

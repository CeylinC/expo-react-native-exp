import styled from "styled-components/native";
import { IContainer } from "./_types";

export const StyledView = styled.View<IContainer>`
  flex: 1;
  align-items: center;
  justify-content: ${(props) => props.justifyAlign};
  background-color: #15171b;
`;

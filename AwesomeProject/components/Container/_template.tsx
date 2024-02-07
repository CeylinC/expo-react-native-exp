import React from "react";
import { StyledView } from "./_style";
import { IContainer } from "./_types";

export function Container({children, justifyAlign="space-evenly"}: IContainer) {
  return <StyledView justifyAlign={justifyAlign}>{children}</StyledView>;
}

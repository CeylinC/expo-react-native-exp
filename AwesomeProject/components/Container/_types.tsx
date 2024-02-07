import { ReactNode } from "react";

export interface IContainer {
  children: ReactNode;
  justifyAlign?:
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "flex-start"
    | "flex-end";
}

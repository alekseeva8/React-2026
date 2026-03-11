import { CSSProperties } from "react";
import { ButtonProps } from "@progress/kendo-react-buttons";

export const mainContainer: CSSProperties = {
  padding: "0%",
  fontFamily: "'Segoe UI', system-ui, sans-serif",
  width: "90vw",
};

export const flexContainer: CSSProperties = {
  display: "flex",
};

export const list: CSSProperties = {
  width: "20vw",
  height: "20vw",
  listStyleType: "none",
  padding: "0px",
  margin: "0px",
};

export const header: CSSProperties = {
  padding: "0px",
  margin: "0px",
};

const leafItemSpan = {
  fontWeight: "400",
  paddingLeft: "30px",
};

const parentItemSpan = {
  fontWeight: "500",
  paddingLeft: "0px",
};

//KendoReact buttons
//Partial делает все свойства типа ButtonProps необязательными.
const rollDownButtonProps: Partial<ButtonProps> = {
  size: "small",
  icon: "plus",
};

const rollUpButtonProps: Partial<ButtonProps> = {
  size: "small",
  icon: "minus",
};

export const getRollButtonStyle = (isOpened: boolean) =>
  isOpened ? rollUpButtonProps : rollDownButtonProps;

export const spanStyle = (isParent: boolean): CSSProperties =>
  isParent ? parentItemSpan : leafItemSpan;

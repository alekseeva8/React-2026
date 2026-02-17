//файл, содержащий css код, представленный в виде js 

import { CSSProperties } from "react";
import { ButtonProps } from '@progress/kendo-react-buttons';

export const mainContainer: CSSProperties = {
  padding: "1%",
  fontFamily: "'Segoe UI', system-ui, sans-serif",
};

export const counterContainer: CSSProperties = {
  width: "25%",
  border: "1px solid blue",
  padding: "1%",
  marginBottom: "1%",
  fontFamily: "'Segoe UI', system-ui, sans-serif",
};

export const buttonsContainer: CSSProperties = {
  display: "flex",
  gap: "0.8%"
};

export const listContainer: CSSProperties = {
  listStyleType: "none",
  padding: "0%"
};

export const counterControllerText: CSSProperties = {
  fontSize: "2.3rem",
  fontWeight: "600",
  color: "#2d3748",
  marginBottom: "1.5%"
};

export const counterText: CSSProperties = {
  fontSize: "2rem",
  fontWeight: "500",
  color: "#2d3748",
  marginTop: "4%",
  marginBottom: "4%"
};

//properties for KendoReact elements
export const incrementButton = {
  themeColor: "info",
  fillMode: "solid",
  rounded: "large",
  icon: "plus-outline"
} satisfies Omit<ButtonProps, "onClick">; 

export const decrementButton = {
  themeColor: "info",
  fillMode: "solid",
  rounded: "large",
  icon: "minus-outline"
} satisfies Omit<ButtonProps, "onClick">; 

export const resetButton = {
  fillMode: "outline",
  rounded: "large",
  icon: "arrow-rotate-cw-small"
} satisfies Omit<ButtonProps, "onClick">;

export const addCounterButton = {
  themeColor: "success",
  fillMode: "solid",
  rounded: "large",
  size: "large"
} satisfies Omit<ButtonProps, "onClick">; 

export const deleteCounterButton = {
  themeColor: "success",
  fillMode: "solid",
  rounded: "large",
  size: "large"
} satisfies Omit<ButtonProps, "onClick">; 

export const resetCountersButton = {
  fillMode: "outline",
  rounded: "large",
  size: "large"
} satisfies Omit<ButtonProps, "onClick">;
//файл, содержащий css код, представленный в виде js 

import { CSSProperties } from "react";

import { ButtonProps } from '@progress/kendo-react-buttons';

export const mainContainer: CSSProperties = {
  padding: "1%",
  fontFamily: "'Segoe UI', system-ui, sans-serif",
};

export const counterText: CSSProperties = {
  fontSize: "2rem",
  fontWeight: "500",
  color: "#2d3748"
};

export const buttonsContainer: CSSProperties = {
  display: "flex",
  gap: "0.8%"
};

//properties for KendoReact elements
export const incrementButton = {
  themeColor: "info",
  fillMode: "solid",
  rounded: "large",
  icon: "plus-outline"
} as const; 
//средняя проверка

export const decrementButton = {
  themeColor: "info",
  fillMode: "solid",
  rounded: "large",
  icon: "minus-outline"
} satisfies Omit<ButtonProps, "onClick">; 
//строгая проверка

export const resetButton = {
  fillMode: "outline",
  rounded: "large",
  icon: "arrow-rotate-cw-small"
} satisfies Omit<ButtonProps, "onClick">;
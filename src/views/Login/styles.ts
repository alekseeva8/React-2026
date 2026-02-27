import { CSSProperties } from "react";
import { ButtonProps } from "@progress/kendo-react-buttons";

export const mainContainer: CSSProperties = {
  padding: "1%",
  fontFamily: "'Segoe UI', system-ui, sans-serif",
  width: "30vw",
};

export const inputContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "2%",
  width: "60%",
};

export const errorMassage: CSSProperties = {
  color: "#f11e1e",
  margin: "2px 0px 0px 0px",
  padding: "0px 0px",
  fontSize: "85%",
};

export const visibleErrorMassage: CSSProperties = {
  ...errorMassage,
  visibility: "visible",
};

export const hiddenErrorMassage: CSSProperties = {
  ...errorMassage,
  visibility: "hidden",
};

export const getErrorStyle = (isVisible: boolean): CSSProperties =>
  isVisible ? visibleErrorMassage : hiddenErrorMassage;

export const loginButton = {
  themeColor: "success",
  fillMode: "solid",
  rounded: "large",
  size: "medium",
} satisfies Omit<ButtonProps, "onClick">;

export const enabledLoginButton = {
  ...loginButton,
  themeColor: "success",
} satisfies Omit<ButtonProps, "onClick">;

export const disabledLoginButton = {
  ...loginButton,
  themeColor: "info",
} satisfies Omit<ButtonProps, "onClick">;

export const getLoginButtonStyle = (isEnabled: boolean) => {
  return isEnabled ? enabledLoginButton : disabledLoginButton;
};

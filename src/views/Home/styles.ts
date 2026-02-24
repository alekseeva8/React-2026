
import { CSSProperties } from "react";

export const tabStrip: CSSProperties = {
  width: "100%"
}

export const tabBase: CSSProperties = {
  fontWeight: 600,
  padding: "8px 24px"
};

export const tabNotSelected: CSSProperties = {
  ...tabBase,
  color: "#525151",
};

export const tabSelected: CSSProperties = {
  ...tabBase,
  color: "#ffffff",
  background: "#1259a5",
  fontWeight: 600,
  borderRadius: "5px"
};

export const getTabStyle = (isSelected: boolean): CSSProperties =>
  isSelected ? tabSelected : tabNotSelected;


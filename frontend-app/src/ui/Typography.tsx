import {
  Typography as MuiTypography,
  type TypographyProps as MuiTypographyProps,
} from "@mui/material";
import type {ElementType} from "react";

export interface TypographyProps extends MuiTypographyProps {
  component?: ElementType;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  color?: string;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
}

export const Typography = (props: TypographyProps) => {
  return <MuiTypography {...props} />;
};

export default Typography;

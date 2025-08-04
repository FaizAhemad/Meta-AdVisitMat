import {Link as MuiLink, type LinkProps as MuiLinkProps} from "@mui/material";
import type {ElementType} from "react";

export interface LinkProps extends MuiLinkProps {
  component?: ElementType;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success";
  href?: string;
  underline?: "none" | "hover" | "always";
}

export const Link = (props: LinkProps) => {
  return <MuiLink {...props} />;
};

export default Link;

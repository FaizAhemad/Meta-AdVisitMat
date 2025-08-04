import {Box as MuiBox, type BoxProps as MuiBoxProps} from "@mui/material";
import type {ElementType} from "react";

export interface BoxProps extends MuiBoxProps {
  component?: ElementType;
}

export const Box = (props: BoxProps) => {
  return <MuiBox {...props} />;
};

export default Box;

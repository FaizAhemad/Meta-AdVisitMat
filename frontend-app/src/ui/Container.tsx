import {
  Container as MuiContainer,
  type ContainerProps as MuiContainerProps,
} from "@mui/material";
import type {ElementType} from "react";

export interface ContainerProps extends MuiContainerProps {
  component?: ElementType;
}

export const Container = (props: ContainerProps) => {
  return <MuiContainer {...props} />;
};

export default Container;

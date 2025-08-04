import type {AppBarProps} from "@mui/material";
import {AppBar as MuiAppBar} from "@mui/material";

const AppBar = (props: AppBarProps) => {
  return <MuiAppBar {...props} />;
};

export default AppBar;

import type {ToolbarProps} from "@mui/material";
import {Toolbar as MuiToolbar} from "@mui/material";

const Toolbar = (props: ToolbarProps) => {
  return <MuiToolbar {...props} />;
};

export default Toolbar;

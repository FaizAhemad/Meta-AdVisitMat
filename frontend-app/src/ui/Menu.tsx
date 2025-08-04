import type {MenuProps} from "@mui/material";
import {Menu as MuiMenu} from "@mui/material";

const Menu = (props: MenuProps) => {
  return <MuiMenu {...props} />;
};

export default Menu;

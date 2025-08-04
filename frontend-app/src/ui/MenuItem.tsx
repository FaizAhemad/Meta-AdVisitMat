import type {MenuItemProps} from "@mui/material";
import {MenuItem as MuiMenuItem} from "@mui/material";

const MenuItem = (props: MenuItemProps) => {
  return <MuiMenuItem {...props} />;
};

export default MenuItem;

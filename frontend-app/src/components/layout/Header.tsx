import {Menu as MenuIcon} from "@mui/icons-material";
import React from "react";
import {Link} from "react-router-dom";
import {APP_STRINGS} from "../../constants/strings";
import AppBar from "../../ui/AppBar";
import Box from "../../ui/Box";
import Button from "../../ui/Button";
import IconButton from "../../ui/IconButton";
import Menu from "../../ui/Menu";
import MenuItem from "../../ui/MenuItem";
import Toolbar from "../../ui/Toolbar";
import Typography from "../../ui/Typography";

const Header = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] =
    React.useState<null | HTMLElement>(null);

  const handleOpenMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  // No longer need getNavStyles as we're using absolute positioning for navigation

  const navigationItems = [
    {label: APP_STRINGS.navigation.home, key: "home", path: "/"},
    {label: APP_STRINGS.navigation.about, key: "about", path: "/about"},
    {label: APP_STRINGS.navigation.contact, key: "contact", path: "/contact"},
  ];

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 0,
          minHeight: {xs: 56, sm: 64},
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          bgcolor: "primary.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: 1200,
            mx: "auto",
            px: {xs: 2, sm: 3, md: 4},
          }}
        >
          {/* Logo */}
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Typography
              variant={APP_STRINGS.attributes.variant.h6}
              component={APP_STRINGS.attributes.component.div}
              sx={{
                fontSize: {xs: "1.25rem", sm: "1.5rem"},
                fontWeight: 600,
                letterSpacing: 0.5,
                color: "inherit",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {APP_STRINGS.common.appName}
            </Typography>
          </Box>

          {/* Desktop Navigation - Center */}
          <Box
            sx={{
              display: {xs: "none", md: "flex"},
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              gap: 3,
            }}
          >
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                style={{textDecoration: "none"}}
              >
                <Button
                  color="inherit"
                  sx={{
                    px: 2,
                    minWidth: "auto",
                    fontSize: "1rem",
                    color: "inherit",
                    "&.active": {
                      fontWeight: "bold",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Icon and Menu - Right aligned */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="medium"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenMobileMenu}
              sx={{
                display: {xs: "flex", md: "none"},
                padding: 1,
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleCloseMobileMenu}
              sx={{
                display: {xs: "block", md: "none"},
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  style={{textDecoration: "none", color: "inherit"}}
                >
                  <MenuItem onClick={handleCloseMobileMenu}>
                    <Typography variant="body1" sx={{color: "inherit"}}>
                      {item.label}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import type {ReactNode} from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import {APP_STRINGS} from "../constants/strings";
import Box from "../ui/Box";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Header />
      <Box
        component={APP_STRINGS.attributes.component.main}
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            marginX: "auto",
            paddingY: {xs: 4, sm: 5, md: 6},
            paddingX: {xs: 2, sm: 3, md: 4},
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;

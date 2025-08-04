import {APP_STRINGS} from "../../constants/strings";
import Box from "../../ui/Box";
import Container from "../../ui/Container";
import Link from "../../ui/Link";
import Typography from "../../ui/Typography";

const Footer = () => {
  return (
    <Box
      component={APP_STRINGS.attributes.component.footer}
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {`${APP_STRINGS.common.copyright} `}
          <Link color="inherit" href="/">
            {APP_STRINGS.common.appName}
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

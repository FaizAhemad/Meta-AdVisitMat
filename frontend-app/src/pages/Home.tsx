import {APP_STRINGS} from "../constants/strings";
import Box from "../ui/Box";
import Typography from "../ui/Typography";

const Home = () => {
  return (
    <Box component="section" className="home-content">
      <Typography
        variant={APP_STRINGS.attributes.variant.h4}
        component="h1"
        gutterBottom
      >
        {APP_STRINGS.common.welcome}
      </Typography>
      <Typography variant={APP_STRINGS.attributes.variant.body1}>
        {APP_STRINGS.common.homeDescription}
      </Typography>
    </Box>
  );
};

export default Home;

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      style={{
        backgroundImage: `url("./bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        width="100%"
        backgroundColor="#003177"
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="52px" color=""  fontStyle= "Verdana">
          Hemut
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Hemut: Social /Media for Artists
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;

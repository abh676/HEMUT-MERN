import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/ganesha picutre.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>a_creates</Typography>
        <Typography color={medium}>a_creates.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        the amazing art collection of finely create dsketched from an renowned artist with 2 years of experience
      </Typography>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/advert.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>a_clicks</Typography>
        <Typography color={medium}>a_clicks.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        the amazing picture collection of finely clicked photographs from an renowned phptographer with 2 years of experience
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

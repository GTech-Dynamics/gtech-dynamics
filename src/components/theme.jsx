import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h3: {
      fontFamily: "Barlow Condensed, Sans-Serif",
      fontWeight: 600,
      letterSpacing: 1,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: "Barlow Condensed, Sans-Serif",
      fontWeight: 600,
      letterSpacing: 1,
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: "Barlow Condensed, Sans-Serif",
    },
    p: {
      fontFamily: "Roboto, Sans-Serif",
      fontWeight: 400,
      letterSpacing: ".1px",
      lineHeight: "1.8em",
      color: "#616669",
    },
    button: {
      fontFamily: "Roboto, Sans-Serif",
      fontWeight: 400,
    },
  },
});
export default theme;

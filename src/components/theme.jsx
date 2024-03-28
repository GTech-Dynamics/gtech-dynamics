import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h3: {
      fontFamily: "Barlow Condensed, Sans-Serif",
      fontWeight: 700,
      letterSpacing: 1,
    },
    h5: {
      fontFamily: "Barlow Condensed, Sans-Serif",
      fontWeight: 700,
      letterSpacing: 1,
    },
    p: {
      fontFamily: "Roboto, Sans-Serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Roboto, Sans-Serif",
      fontWeight: 400,
    },
  },
});
export default theme;

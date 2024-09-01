import React, { useEffect } from "react";
import "../../style/about-us.css";
import { Box } from "@mui/material";
import AboutBase from "./base";
function AboutUs() {
  useEffect(() => {
    document.title = "About Us - GTech Dynamics";
  }, []);

  return (
    <Box className="about-parent">
      <AboutBase />
    </Box>
  );
}

export default AboutUs;

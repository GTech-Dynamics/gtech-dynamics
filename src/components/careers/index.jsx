import React, { useEffect } from "react";
import "../../style/careers.css";
import { Box, Typography } from "@mui/material";
import BaseComponent from "./base";
import bg from "../../static/images/careersbackground.jpg";
function Careers() {
  useEffect(() => {
    document.title = "Careers - GTech Dynamics";
  }, []);
  return (
    <>
      <Box
        className="parent"
        sx={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Box className="header">
          <Typography variant="h3">
            Come join us & sharpen your skills by working on industry-leading
            projects
          </Typography>
        </Box>
      </Box>
      <BaseComponent />
    </>
  );
}

export default Careers;

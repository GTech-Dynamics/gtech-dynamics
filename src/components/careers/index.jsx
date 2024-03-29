import React, { useEffect } from "react";
import "../../style/careers.css";
import { Box, Typography } from "@mui/material";
import BaseComponent from "./base";
function Careers() {
  useEffect(() => {
    document.title = "Careers - Gtech Dynamics";
  }, []);
  return (
    <>
      <Box className="parent">
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

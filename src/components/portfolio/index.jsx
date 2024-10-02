import { Box, Typography } from "@mui/material";
import PortfolioComponent from "./PortfolioComponent";
import "../../style/portfolio.css";
import React, { useEffect } from "react";
import bg from "../../static/images/portfolio.jpg";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio - GTech Dynamics";
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
            Projects We Conquered & Delivered Unparalleled Success
          </Typography>
        </Box>
      </Box>
      <PortfolioComponent />
    </>
  );
};

export default Portfolio;

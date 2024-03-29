import { Box, Typography } from "@mui/material";
import PortfolioComponent from "./PortfolioComponent";
import "../../style/portfolio.css";
import { useEffect } from "react";
function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio - Gtech Dynamics";
  }, []);
  return (
    <>
      <Box className="parent">
        <Box className="header">
          <Typography variant="h3">
            Projects We Conquered & Delivered Unparalleled Success
          </Typography>
        </Box>
      </Box>
      <PortfolioComponent />
    </>
  );
}

export default Portfolio;

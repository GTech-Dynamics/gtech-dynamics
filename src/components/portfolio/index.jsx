import { Box, Typography } from "@mui/material";
import PortfolioComponent from "./PortfolioComponent";
import "../../style/portfolio.css";
import { useEffect } from "react";
import bg from "../../static/images/portfoliobackground.jpg";
function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio - Gtech Dynamics";
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
}

export default Portfolio;

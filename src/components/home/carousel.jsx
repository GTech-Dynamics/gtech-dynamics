import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "../../style/home.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { CarousalItems } from "./items";

const CarouselComponent = () => {
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const handleButtonClick = (page) => {
    if (page === "about") {
      navigate("/about-us");
    } else {
      navigate("/contact-us");
    }
  };

  return (
    <Box className="carousal-parent">
      <Carousel
        className="carousal"
        autoPlay={isMediumScreen}
        navButtonsAlwaysVisible="true"
        animation="fade"
        showDots="true"
        transitionDuration={300}
        NextIcon={
          isMediumScreen ? null : (
            <ArrowForwardIcon fontSize="medium" className="custom-next-icon" />
          )
        }
        PrevIcon={
          isMediumScreen ? null : (
            <ArrowBackIcon className="custom-prev-icon" fontSize="medium" />
          )
        }
      >
        {CarousalItems.map((item, i) => (
          <Box
            key={i}
            className="carousal-item"
            sx={{ backgroundImage: item.background }}
          >
            <Box className="carousal-body">
              <Box className="carousal-content">
                <Typography className="carousal-hr-lines">
                  {item.header}
                </Typography>
                <Typography variant="h3">{item.name}</Typography>
                <Typography variant="body1">{item.description}</Typography>
                <Box className="buttons-container">
                  <button
                    className="btn"
                    onClick={() => handleButtonClick("about")}
                  >
                    <span>
                      <b>About Us</b>
                    </span>
                    <span>{<ArrowForwardIcon color="white" />}</span>
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleButtonClick("contact")}
                  >
                    <span>
                      <b>Contact Us</b>
                    </span>
                    <span>{<ArrowForwardIcon color="white" />}</span>
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import "../../style/home.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
const CarouselComponent = ({ slides }) => {
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  var items = [
    {
      name: "Best It Solutions Company In The Global Community ",
      description:
        "We are a highly client-centric company that uses industry-leading best practices, cutting-edge tools &amp; technologies to ensure that you receive the highest quality services for…",
    },
    {
      name: "To Our Upcoming Buisness Partners And Clients",
      description:
        "We are a highly client-centric company that uses industry-leading best practices, cutting-edge tools &amp; technologies to ensure that you receive the highest quality services for…",
    },
    {
      name: "Best It Solutions And Buisness Services In Tech Market",
      description:
        "We are a highly client-centric company that uses industry-leading best practices, cutting-edge tools &amp; technologies to ensure that you receive the highest quality services for…",
    },
  ];
  const navigate = useNavigate();

  const handleClick = (page) => {
    if (page === "about") {
      navigate("/about-us");
    } else {
      navigate("/contact-us");
    }
  };
  return (
    <Box className="parent">
      <Carousel
        className="carousal"
        autoPlay={false}
        navButtonsAlwaysVisible="true"
        animation="fade"
        NextIcon={
          isMediumScreen ? null : (
            <ArrowForwardIcon fontSize="large" className="custom-next-icon" />
          )
        }
        PrevIcon={
          isMediumScreen ? null : (
            <ArrowBackIcon className="custom-prev-icon" fontSize="large" />
          )
        }
      >
        {items.map((item, i) => (
          <Box className="carousal-items ">
            <Typography variant="h2">{item.name}</Typography>
            <Typography variant="p">{item.description}</Typography>
            <Box className="buttons-container">
              <button className="btn" onClick={() => handleClick("about")}>
                <span>
                  <b>About Us</b>
                </span>
                <span>{<ArrowForward color="white" />}</span>
              </button>
              <button className="btn" onClick={() => handleClick("contact")}>
                <span>
                  <b>Contact Us</b>
                </span>
                <span>{<ArrowForward color="white" />}</span>
              </button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

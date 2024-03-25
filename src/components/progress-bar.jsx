import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../style/progress-bar.css";

function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    console.log("scroll percentage", scrollPercentage);
    const handleScroll = () => {
      let windowHeight = window.innerHeight;
      let documentHeight = document.documentElement.scrollHeight;
      let scrollY = window.scrollY;
      let scrollPercent = scrollY / (documentHeight - windowHeight);
      setScrollPercentage(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Box className="progress-container">
      <Box
        className="progress-fill"
        sx={{ width: `${scrollPercentage}` }}
      ></Box>
    </Box>
  );
}

export default ProgressBar;

import { Box, Typography, Button } from "@mui/material";
import ServicesComponent from "./services";
import { useEffect } from "react";
function Service() {
  useEffect(() => {
    document.title = "Services - Gtech Dynamics";
  }, []);
  return (
    <>
      <Box className="service-parent">
        <Box className="child3">
          <Typography variant="h2">
            We Provide Custom Solutions According To Specific Buisness
            Requirements
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "white",
              paddingTop: "3px",
              animation: "fadeIn 1.5s forwards",
            }}
          >
            Explore our services and pick one according to your buisness needs.
          </Typography>
        </Box>
      </Box>
      <ServicesComponent />
    </>
  );
}

export default Service;

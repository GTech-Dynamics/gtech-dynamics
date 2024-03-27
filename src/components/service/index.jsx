import { Box, Typography } from "@mui/material";
import ServicesComponent from "./services";
import { useEffect } from "react";
function Service() {
  useEffect(() => {
    document.title = "Services - Gtech Dynamics";
  }, []);
  return (
    <>
      <Box className="service-parent">
        <Box className="service-header">
          <Box className="header-content">
            <Typography variant="h3">
              We Provide Custom Solutions According To Specific Buisness
              Requirements
            </Typography>
            <Typography variant="p">
              Explore our services and pick one according to your buisness
              needs.
            </Typography>
          </Box>
        </Box>
      </Box>
      <ServicesComponent />
    </>
  );
}

export default Service;

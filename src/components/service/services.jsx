import React from "react";
import { Typography, Box } from "@mui/material";
import ServiceGrid from "./GridComponent";
const ServicesComponent = () => {
  return (
    <Box className="main-body">
      <Box className="body-child1">
        <Typography variant="p" className="hr-lines">
          Services
        </Typography>
        <Typography variant="h3">Services We Provide</Typography>
        <Box className="inner-child1">
          <Typography variant="p">
            GTech Dynamics is a client-focused company that focuses on providing
            the best IT services. Let the professionals handle the heavy work
            for you. Our top priority is to provide industry-leading solutions
            and products adhering to market standards while ensuring only the
            in-demand standard practices of the IT industry as utilized.
          </Typography>
        </Box>
      </Box>
      <ServiceGrid />
    </Box>
  );
};
export default ServicesComponent;

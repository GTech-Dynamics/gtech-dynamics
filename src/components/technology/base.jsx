import React from "react";
import { Box, Typography } from "@mui/material";
const TechnologyBase = ({ subtitle, description }) => {
  return (
    <Box className="body-child1">
      <Typography variant="p" className="hr-lines">
        Technologies
      </Typography>
      <Typography variant="h3">{subtitle}</Typography>
      <Box className="inner-child1">
        <Typography variant="p">{description}</Typography>
      </Box>
    </Box>
  );
};

export default TechnologyBase;

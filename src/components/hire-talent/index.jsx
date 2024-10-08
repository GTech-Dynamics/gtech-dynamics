import React from "react";
import { Box, Typography } from "@mui/material";
import HireTalentGrid from "./grid";
import "../../style/talent.css";

function Talent() {
  return (
    <Box className="main-body">
      <Box className="body-child1">
        <Typography variant="p" className="hr-lines">
          Hire
        </Typography>
        <Typography variant="h3">Hire Talent</Typography>
        <Box className="inner-child1">
          <Typography variant="p">
            At GTech Dynamics, we offer a versatile platform to connect and
            recruit highly skilled software developers, designers, and quality
            assurance engineers who perfectly fit your time zone and work
            preferences.
          </Typography>
        </Box>
      </Box>
      <HireTalentGrid />
    </Box>
  );
}
export default Talent;

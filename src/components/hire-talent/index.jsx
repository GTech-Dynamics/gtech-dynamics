import { Box, Typography } from "@mui/material";
import HireTalentGrid from "./grid";
import "../../style/talent.css";
function Talent() {
  return (
    <Box className="body-child1">
      <Typography variant="p" className="hr-lines">
        Hire
      </Typography>
      <Typography variant="h3">Hire Talent</Typography>
      <Box className="inner-child1">
        <Typography variant="p">
          At Gtech Dynamics, we offer a versatile platform to connect and
          recruit highly skilled software developers, designers, and quality
          assurance engineers who perfectly fit your time zone and work
          preferences.
        </Typography>
      </Box>
      <HireTalentGrid />
    </Box>
  );
}
export default Talent;

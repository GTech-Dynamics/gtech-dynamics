import { Box, Typography } from "@mui/material";
import VerticalTabs from "./menu";
import TechnologyGrid from "./GridComponent";
import { All } from "./GridItems";

function Technology() {
  return (
    <>
      <Box className="portfolio-parent">
        <Box className="portfolio-header">
          <Typography variant="h3">
            Leveraging Cutting-edge IT technologies To deliver innovate products
          </Typography>
        </Box>
      </Box>
      <Box className="main-body" sx={{ backgroundColor: "#edeff8" }}>
        <Box className="body-child1">
          <Typography variant="p" className="hr-lines">
            Technologies
          </Typography>
          <Typography variant="h3">Technologies We Use</Typography>
          <Box className="inner-child1">
            <Typography variant="p">
              In this modern era, a software house is as good as the tools and
              technologies it utilizes. At Code Graphers, we use advanced tools
              and cutting-edge technologies to deliver innovative products that
              won’t only meet your needs but also thrive in the marketplace.
            </Typography>
          </Box>
        </Box>
        <Box className="body-child2">
          <VerticalTabs />
        </Box>
      </Box>
      <TechnologyGrid items={All} />
    </>
  );
}
export default Technology;

import { Box, Typography } from "@mui/material";
import VerticalTabs from "./menu";
import TechnologyGrid from "./GridComponent";
import TechnologyBase from "./base";
import { All } from "./GridItems";

function Technology() {
  let subTitle = "Technologies We Utilize";
  let description =
    "In this modern era, the effectiveness of a software house is intricately tied to the tools and technologies it employs. At Code Graphers, we leverage advanced tools and cutting-edge technologies to craft innovative products that not only fulfill your requirements but also excel in the competitive marketplace.";

  return (
    <>
      <Box className="parent">
        <Box className="header">
          <Typography variant="h3">
            Leveraging Cutting-edge IT technologies To deliver innovate products
          </Typography>
        </Box>
      </Box>
      <Box className="main-body" sx={{ backgroundColor: "#edeff8" }}>
        <TechnologyBase subtitle={subTitle} description={description} />
        <Box className="techbody-child2">
          <VerticalTabs />
        </Box>
      </Box>
      <TechnologyGrid items={All} />
    </>
  );
}
export default Technology;

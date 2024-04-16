import { Box, Typography } from "@mui/material";
import VerticalTabs from "./menu";
import TechnologyGrid from "./GridComponent";
import TechnologyBase from "./base";
import { All } from "./GridItems";
import "../../style/technology.css";
import bg from "../../static/images/technologybackground.jpg";
function Technology() {
  let subTitle = "Technologies We Utilize";
  let description =
    "In this modern era, the effectiveness of a software house is intricately tied to the tools and technologies it employs. At Code Graphers, we leverage advanced tools and cutting-edge technologies to craft innovative products that not only fulfill your requirements but also excel in the competitive marketplace.";

  return (
    <>
      <Box
        className="parent"
        sx={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Box className="header">
          <Typography variant="h3">
            Leveraging Cutting-edge IT technologies To deliver innovate products
          </Typography>
        </Box>
      </Box>
      <Box className="main-body">
        <TechnologyBase subtitle={subTitle} description={description} />
        <Box>
          <VerticalTabs />
        </Box>
        <TechnologyGrid items={All} />
      </Box>
    </>
  );
}
export default Technology;

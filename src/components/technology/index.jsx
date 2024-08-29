import { Box, Typography } from "@mui/material";
import VerticalTabs from "./menu";
import TechnologyGrid from "./GridComponent";
import TechnologyBase from "./base";
import {
  FrontendDevelopmentIcons,
  BackendDevelopmentIcons,
  MobileAppDevelopmentIcons,
  InfrasructureIcons,
  HybridAppIcons,
  MicroservicesIcons,
} from "./GridItems";
import "../../style/technology.css";
import bg from "../../static/images/Buisness-Technology.jpg";
import React, { useEffect } from "react";

function Technology() {
  let subTitle = "Technologies We Utilize";
  let description =
    "In this modern era, the effectiveness of a software house is intricately tied to the tools and technologies it employs. At GTech Dynamics, we leverage advanced tools and cutting-edge technologies to craft innovative products that not only fulfill your requirements but also excel in the competitive marketplace.";

  const [value, setValue] = React.useState(0);

  useEffect(() => {
    document.title = "Technology - GTech Dynamics";
  }, []);

  const items =
    value === 0
      ? FrontendDevelopmentIcons
      : value === 1
      ? BackendDevelopmentIcons
      : value === 2
      ? MobileAppDevelopmentIcons
      : value === 3
      ? InfrasructureIcons
      : value === 4
      ? HybridAppIcons
      : MicroservicesIcons;
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
          <VerticalTabs value={value} setValue={setValue} />
        </Box>
        <TechnologyGrid items={items} />
      </Box>
    </>
  );
}
export default Technology;

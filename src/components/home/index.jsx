import CarouselComponent from "./carousel";
import ServicesComponent from "../service/services";
import { Box } from "@mui/material";
import PortfolioComponent from "../portfolio/PortfolioComponent";
import { useEffect } from "react";
import TechnologyBase from "../technology/base";
import TechnologyGrid from "../technology/GridComponent";
import { gridHome } from "../technology/GridItems";
import Talent from "../hire-talent/index";
import WorkBase from "../how-we-work";
import "../../style/home.css";

function Home() {
  useEffect(() => {
    document.title = "Home - Gtech Dynamics";
  }, []);
  let techSubTitle = "Technologies We Leverage";
  let techDescription =
    "We use cutting-edge technology to provide you the best of services.";

  return (
    <>
      <CarouselComponent />
      <Box className="component-sections">
        <ServicesComponent />
      </Box>
      <Box>
        <PortfolioComponent home />
      </Box>
      <Box className="component-sections">
        <Box className="main-body">
          <TechnologyBase
            subtitle={techSubTitle}
            description={techDescription}
          />
          <TechnologyGrid items={gridHome} home="true" />
        </Box>
      </Box>
      <Box id="hireTalentSection">
        <Talent />
      </Box>
      <Box className="component-sections">
        <WorkBase />
      </Box>
    </>
  );
}

export default Home;

import CarouselComponent from "./carousel";
import ServicesComponent from "../service/services";
import { Box } from "@mui/material";
import PortfolioComponent from "../portfolio/PortfolioComponent";
import { useEffect } from "react";
import TechnologyBase from "../technology/base";
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
      <Box className="service-component">
        <ServicesComponent />
      </Box>
      <Box>
        <PortfolioComponent home />
      </Box>
      <Box className="technology-component">
        <TechnologyBase subtitle={techSubTitle} description={techDescription} />
      </Box>
    </>
  );
}

export default Home;

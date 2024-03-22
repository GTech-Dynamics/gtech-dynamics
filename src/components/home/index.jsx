import CarouselComponent from "./carousel";
import ServicesComponent from "../service/services";
import { Box } from "@mui/material";
import PortfolioComponent from "../portfolio/PortfolioComponent";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    document.title = "Home - Gtech Dynamics";
  }, []);
  return (
    <>
      <CarouselComponent />
      <Box className="service-component">
        <ServicesComponent />
      </Box>
      <Box>
        <PortfolioComponent home />
      </Box>
    </>
  );
}

export default Home;

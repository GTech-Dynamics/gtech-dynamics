import CarouselComponent from "./carousel";
import ServicesComponent from "../service/services";
import PortfolioComponent from "../portfolio/PortfolioComponent";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    document.title = "Home - Gtech Dynamics";
  }, []);
  return (
    <>
      <CarouselComponent />
      <ServicesComponent />
      <PortfolioComponent />
    </>
  );
}

export default Home;

import CarouselComponent from './carousel';
import ServicesComponent from '../service/services';
import PortfolioComponent from '../portfolio/PortfolioComponent';

function Home() { 
    return (
      <>
        <CarouselComponent/>
        <ServicesComponent/>
        <PortfolioComponent/>
      </> 
    );
  }
  
  export default Home;
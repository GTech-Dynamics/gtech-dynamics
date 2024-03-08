import NavBar from '../navbar';
import Footer from '../footer';
import CarouselComponent from './carousel';
import ServicesComponent from '../service/services';

function Home() { 
    return (
      <>
        <NavBar />
        <CarouselComponent/>
        <ServicesComponent/>
        <Footer />
      </> 
    );
  }
  
  export default Home;
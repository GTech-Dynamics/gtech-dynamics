import NavBar from './components/navbar';
import Footer from './components/footer';
import CarouselComponent from './components/home/carousel';
import './style/global.css'
function App() {
  const slides = ['Slide 1', 'Slide 2', 'Slide 3']; 
  return (
    <>
      <NavBar />
      <CarouselComponent/>
      <Footer />
    </> 
  );
}

export default App;

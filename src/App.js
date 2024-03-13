import './style/global.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "../src/components/home/index";
import Services from "../src/components/service/index";
import Portfolio from "../src/components/portfolio/index";
import Contact from "../src/components/contact/index";
import NavBar from '../src/components/navbar';
import Footer from '../src/components/footer';
function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about-us" element={<Home />} />
                <Route path="/contact-us" element={<Contact />} />
            </Routes>
        <Footer />
  </BrowserRouter>

    </> 
  );
}

export default App;

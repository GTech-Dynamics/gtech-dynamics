import "./style/global.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../src/components/home/index";
import Services from "../src/components/service/index";
import Portfolio from "../src/components/portfolio/index";
import Contact from "../src/components/contact/index";
import NavBar from "../src/components/navbar";
import Footer from "../src/components/footer";
import AboutUs from "../src/components/about-us/index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/components/theme";
import Technology from "./components/technology";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

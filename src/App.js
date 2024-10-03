import React from "react";
import "./style/global.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../src/components/home/index";
import Services from "../src/components/service/index";
import Portfolio from "../src/components/portfolio/index";
import Contact from "../src/components/contact/index";
import AboutUs from "../src/components/about-us/index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/components/theme";
import Technology from "./components/technology";
import Careers from "./components/careers/index";

import WithNavBarFooterLayout from "./components/navLayout";
import WithoutNavBarFooterLayout from "./components/simpleLayout";
import PrivacyPolicy from "./components/privacy-policy/index";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<WithNavBarFooterLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/technology" element={<Technology />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />
          </Route>

          {/* Routes without NavBar and Footer */}
          <Route element={<WithoutNavBarFooterLayout />}>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

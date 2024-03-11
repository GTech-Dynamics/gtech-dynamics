import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter} from "react-router-dom";
// import {  NavLink as Route } from "react-router-dom";

import Home from "../src/components/home/index";
import Services from "../src/components/service/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>,

);

reportWebVitals();

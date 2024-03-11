import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import '../style/footer.css';
import { Container, Box} from '@mui/material';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="row">
          <div className="col-md-5 col-sm-12 d-flex flex-column align-items-center text-center p-3">
            <div className="container imgcontainer">
              <img src='/logo/dynamics.png' className='footer-logo ' alt="logo" />
            </div>
          <br />
            <h4>GTECH DYNAMICS</h4>
            <p className="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>
          <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center text-center p-3">
            <div className="container " id="container">
              <div className="row">
                <div className="col-auto"><FaPhone /></div>
                <div className="col"><p>+92 303 4086984</p></div>
              </div>
              <div className="row">
                <div className="col-auto"><FaEnvelope className="mr-2" /></div>
                <div className="col"><p>info@gtech-dynamics.com</p></div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 d-flex flex-column align-items-center p-3">
            <h5>Services</h5>
              <NavLink to="/services" className="nav-link">Services</NavLink>
              <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
            <h5 className="mt-3">Company</h5>
            <NavLink to="/about-us" className="nav-link">About Us</NavLink>
            <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
          </div>
        </div>
        <p className="text-center">Copyright @ GTECH DYNAMICS All Right Reserved | Privacy Policy</p>
      </footer>
  );
};

export default Footer;

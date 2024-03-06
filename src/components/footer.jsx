import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    
      <footer className="footer">
        <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center p-3">
      <img src='/logo/dynamics.png' className='App-logo' alt="logo" />
      <br />
      <h4>GTECH DYNAMICS</h4>
      <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.
      </p>
    </div>
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center p-3">
      <div className="row">
        <div className="col-auto"><FaPhone /></div>
        <div className="col"><p>+92 303 4086984</p></div>
      </div>
      <div className="row">
      <div className="col-auto"><FaEnvelope className="mr-2" /></div>
      <div className="col"><p>info@gtech-dynamics.com</p></div>
      </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center">
        <p>Column 3</p>
      </div>
        </div>
        <p className="text-center">Copyright @ GTECH DYNAMICS All Right Reserved | Privacy Policy</p>
      </footer>
  );
};

export default Footer;
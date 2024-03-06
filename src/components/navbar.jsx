import React, { useState } from "react";
import { IoClose} from "react-icons/io5";
import '../style/global.css';
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
    <nav>
      <Link to="/">
      <img src='/logo/dynamics.png' className='App-logo' alt="logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? (
            <IoClose />
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
};
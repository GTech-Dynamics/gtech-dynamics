import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "../style/footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0,
      }
    );
    const currentFooterRef = footerRef.current;

    if (currentFooterRef) {
      observer.observe(currentFooterRef);
    }

    // Cleanup function
    return () => {
      if (currentFooterRef) {
        observer.unobserve(currentFooterRef);
      }
    };
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={`footer ${isVisible ? "animate" : ""}`}
      ref={footerRef}
    >
      <Grid
        item
        md={5}
        xs={12}
        className={`sections ${isVisible ? "animate" : ""}`}
      >
        <Box className="footer-logo">
          <img
            src="/logo/android-chrome-192x192.png"
            alt="logo"
            width="170px"
            height="100px"
          />
        </Box>
        <Typography variant="p" className="content">
          At GTech Dynamics, we empower businesses with innovative IT solutions
          and expert consultancy. Our team delivers tailored strategies to drive
          efficiency, growth, and success, helping you navigate the
          ever-changing digital landscape with confidence. Trust us to elevate
          your business in the digital age.
        </Typography>
      </Grid>

      <Grid
        item
        md={4}
        xs={12}
        className={`section2 ${isVisible ? "animate" : ""}`}
      >
        <Grid container spacing={2}>
          <Grid item>
            <PhoneIcon className="icon" />
          </Grid>
          <Grid item>
            <Typography variant="p" className="content">
              +92 303 4086984
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <EmailIcon className="icon" />
          </Grid>
          <Grid item>
            <Typography variant="p" className="content">
              info@gtech-dynamics.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={3}
        xs={12}
        className={`sections ${isVisible ? "animate" : ""}`}
      >
        <Typography variant="h5">Services</Typography>
        <NavLink to="/services" className="nav-link">
          Services
        </NavLink>
        <NavLink to="/portfolio" className="nav-link">
          Portfolio
        </NavLink>
        <Typography variant="h5" className="mt-3">
          Company
        </Typography>
        <NavLink to="/about-us" className="nav-link">
          About Us
        </NavLink>
        <NavLink to="/contact-us" className="nav-link">
          Contact Us
        </NavLink>
      </Grid>
      <Grid item xs={12} className="copyright">
        <Typography variant="p" style={{ display: "inline-flex" }}>
          Copyright @ GTECH DYNAMICS All Rights Reserved |
          <NavLink
            to="/privacy-policy"
            className="nav-link"
            target="_blank"
            style={{ marginLeft: "3px" }}
          >
            Privacy Policy
          </NavLink>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "../style/footer.css";
const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="footer"
    >
      <Grid item md={5} xs={12} className="sections">
        <Box className="footer-logo">
          <img
            src="/logo/android-chrome-192x192.png"
            alt="logo"
            width="170px"
            height="100px"
          />
        </Box>
        <Typography variant="body1" className="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </Grid>

      <Grid item md={4} xs={12} className="section2">
        <Grid container spacing={2}>
          <Grid item>
            <PhoneIcon className="icon" />
          </Grid>
          <Grid item>
            <Typography variant="body1">+92 303 4086984</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <EmailIcon className="icon" />
          </Grid>
          <Grid item>
            <Typography variant="body1">info@gtech-dynamics.com</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} xs={12} className="sections">
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
        <Typography variant="body1">
          Copyright @ GTECH DYNAMICS All Right Reserved | Privacy Policy
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

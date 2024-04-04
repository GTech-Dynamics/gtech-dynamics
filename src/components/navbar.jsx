import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import "../style/navbar.css";
import ProgressBar from "./progress-bar";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayClosing, setOverlayClosing] = useState(false);
  const [activeTab, setActiveTab] = useState(-1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab(1);
  }, []);

  const handleMenuOpen = () => {
    if (!menuOpen) {
      setOverlayOpen(true);
      setTimeout(() => {
        setMenuOpen(true);
      }, 1000);
    }
  };
  const handleHireTalentClick = () => {
    if (location.pathname !== "/home" && location.pathname !== "/") {
      navigate("/home");
    }

    setTimeout(() => {
      const hireTalentSection = document.getElementById("hireTalentSection");
      if (hireTalentSection) {
        hireTalentSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
    setTimeout(() => {
      setOverlayClosing(false);
      setOverlayOpen(false);
      setTimeout(() => {
        setOverlayOpen(false);
        setOverlayClosing(false);
      }, 1000);
    }, 500);
  };
  return (
    <>
      <div>
        <AppBar className="appbar">
          {(location.pathname === "/home" || location.pathname === "/") && (
            <ProgressBar />
          )}
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                src="/logo/android-chrome-192x192.png"
                alt="logo"
                width="170px"
                height="100px"
              />
            </Typography>
            <IconButton
              color="black"
              aria-label="menu"
              onClick={handleMenuOpen}
              className="menu-icon"
            >
              <MenuIcon />
            </IconButton>
            <Tabs
              className="tabs"
              value={activeTab}
              onChange={(event, newValue) => setActiveTab(newValue)}
              indicatorColor="secondary"
              TabIndicatorProps={{
                style: { display: "none" },
              }}
            >
              <Tab
                label="Home"
                component={NavLink}
                to="/home"
                className="tab"
                key="home"
              />
              <Tab
                label="Services"
                component={NavLink}
                to="/services"
                className="tab"
                key="service"
              />
              <Tab
                label="Technologies"
                component={NavLink}
                to="/technology"
                className="tab"
                key="technology"
              />
              <Tab
                label="portfolio"
                component={NavLink}
                to="/portfolio"
                className="tab"
                key="portfolio"
              />
              <Tab
                label="Hire Talent"
                className="tab"
                to="/home"
                key="hire talent"
                onClick={handleHireTalentClick}
              />
              <Tab
                label="Careers"
                component={NavLink}
                to="/careers"
                className="tab"
                key="careers"
              />
              <Tab
                label="About Us"
                component={NavLink}
                to="/about-us"
                className="tab"
                key="about us"
              />
              <Tab
                label="Contact Us"
                component={NavLink}
                to="/contact-us"
                className="tab"
                key="contact us"
              />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Toolbar />

        {overlayOpen && (
          <div className={`overlay ${overlayClosing ? "closing" : ""}`} />
        )}

        <Drawer
          anchor="left"
          open={menuOpen}
          onClose={handleMenuClose}
          sx={{ display: { xs: "block", md: "none" } }}
          className="drawer"
          variant="persistant"
          transitionDuration={{ enter: 2000, exit: 2000 }}
          classes={{
            paper: "drawer-paper",
          }}
        >
          <Box className="drawer-header">
            <Box className="drawer-close-icon">
              <IconButton onClick={handleMenuClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Tab label="Home" component={NavLink} to="/home" className="tab" />
          <Tab
            label="Services"
            component={NavLink}
            to="/services"
            className="tab"
          />
          <Tab
            label="portfolio"
            component={NavLink}
            to="/portfolio"
            className="tab"
          />
          <Tab
            label="technology"
            component={NavLink}
            to="/technology"
            className="tab"
          />
          <Tab
            label="careers"
            component={NavLink}
            to="/careers"
            className="tab"
          />
          <Tab
            label="About Us"
            component={NavLink}
            to="/about-us"
            className="tab"
          />
          <Tab
            label="Contact Us"
            component={NavLink}
            to="/contact-us"
            className="tab"
          />
        </Drawer>
      </div>
    </>
  );
}

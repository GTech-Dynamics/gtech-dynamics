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
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setActiveTab(0);
    } else if (location.pathname === "/services") {
      setActiveTab(1);
    } else if (location.pathname === "/technology") {
      setActiveTab(2);
    } else if (location.pathname === "/portfolio") {
      setActiveTab(3);
    } else if (location.pathname === "/careers") {
      setActiveTab(5);
    } else if (location.pathname === "/about-us") {
      setActiveTab(6);
    } else if (location.pathname === "/contact-us") {
      setActiveTab(7);
    }
  }, [location.pathname]);

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
        if (menuOpen) {
          handleMenuClose();
        }
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
      <AppBar className="appbar">
        {(location.pathname === "/home" || location.pathname === "/") && (
          <ProgressBar />
        )}
        <Toolbar>
          <Typography variant="h6" component="div" className="header-logo">
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

      {overlayOpen && (
        <div className={`overlay ${overlayClosing ? "closing" : ""}`} />
      )}

      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={handleMenuClose}
        sx={{ display: { xs: "block", md: "none" } }}
        className="drawer"
        variant="persistent"
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
        <Tab
          label="Home"
          component={NavLink}
          to="/home"
          className="tab"
          onClick={() => {
            setActiveTab(0);
            handleMenuClose();
          }}
          selected={activeTab === 0}
        />
        <Tab
          label="Services"
          component={NavLink}
          to="/services"
          className="tab"
          onClick={() => {
            setActiveTab(1);
            handleMenuClose();
          }}
          selected={activeTab === 1}
        />
        <Tab
          label="Technologies"
          component={NavLink}
          to="/technology"
          className="tab"
          key="technology"
          onClick={() => {
            setActiveTab(2);
            handleMenuClose();
          }}
          selected={activeTab === 2}
        />
        <Tab
          label="portfolio"
          component={NavLink}
          to="/portfolio"
          className="tab"
          key="portfolio"
          onClick={() => {
            setActiveTab(3);
            handleMenuClose();
          }}
          selected={activeTab === 3}
        />
        <Tab
          label="Hire Talent"
          className="tab"
          key="hire talent"
          onClick={() => {
            setActiveTab(4);
            handleHireTalentClick();
          }}
          selected={activeTab === 4}
        />
        <Tab
          label="careers"
          component={NavLink}
          to="/careers"
          className="tab"
          onClick={() => {
            setActiveTab(5);
            handleMenuClose();
          }}
          selected={activeTab === 5}
        />
        <Tab
          label="About Us"
          component={NavLink}
          to="/about-us"
          className="tab"
          onClick={() => {
            setActiveTab(6);
            handleMenuClose();
          }}
          selected={activeTab === 6}
        />
        <Tab
          label="Contact Us"
          component={NavLink}
          to="/contact-us"
          className="tab"
          onClick={() => {
            setActiveTab(7);
            handleMenuClose();
          }}
          selected={activeTab === 7}
        />
      </Drawer>
    </>
  );
}

import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayClosing, setOverlayClosing] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleMenuToggle = () => {
    if (!menuOpen) {
      setOverlayOpen(true);
      setTimeout(() => {
        setMenuOpen(true);
      }, 1000);
    } else {
      setMenuOpen(false);
      setOverlayClosing(true);
      setTimeout(() => {
        setOverlayOpen(false);
        setOverlayClosing(false);
      }, 1500);
    }
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
    <div>
      <AppBar className="appbar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="/favicon-32x32.png" alt="logo" />
          </Typography>
          <IconButton
            color="black"
            aria-label="menu"
            onClick={handleMenuToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Tabs
            sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}
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
              className={activeTab === 0 ? "tab activeTab" : "tab"}
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
              label="portfolio"
              component={NavLink}
              to="/portfolio"
              className="tab"
              key="portfolio"
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
        <div
          onClick={handleMenuClose}
          className={`overlay ${overlayClosing ? "closing" : ""}`}
        />
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
          <IconButton onClick={handleMenuClose}>
            <CloseIcon />
          </IconButton>
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
  );
}

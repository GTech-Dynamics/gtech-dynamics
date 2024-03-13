import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
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
            sx={{ display: { xs: "block", md: "none" } }} // Hide on medium and above screens
          >
            <MenuIcon />
          </IconButton>
          <Tabs
            sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}
            indicatorColor="secondary"
            TabIndicatorProps={{
              style: { display: "none" },
            }}
          >
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
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={handleMenuClose}
        sx={{ display: { xs: "block", md: "none" } }}
        className="drawer"
        classes={{
          paper: "drawer-paper",
        }}
      >
        <List>
          <ListItem
            Button
            component={NavLink}
            to="/home"
            className="listitem"
            onClick={handleMenuClose}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            Button
            component={NavLink}
            to="/services"
            className="listitem"
            onClick={handleMenuClose}
          >
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem
            Button
            component={NavLink}
            to="/portfolio"
            className="listitem"
            onClick={handleMenuClose}
          >
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem
            Button
            component={NavLink}
            to="/about-us"
            className="listitem"
            onClick={handleMenuClose}
          >
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem
            Button
            component={NavLink}
            to="/contact-us"
            className="listitem"
            onClick={handleMenuClose}
          >
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

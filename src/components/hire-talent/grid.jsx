import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { items } from "./GridItems";

const HireTalentGrid = () => {
  return (
    <Grid container spacing={2} className="home-hire-grid">
      {items.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          key={index}
          className="hire-child-grid"
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3} md={3} key={index} className="left">
              <Box className="logo-container">{item.logo}</Box>
            </Grid>
            <Grid item sm={9} md={9} key={index} className="right">
              <Typography varaint="p">{item.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
      ,
    </Grid>
  );
};

export default HireTalentGrid;

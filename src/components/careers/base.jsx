import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import image1 from "../../static/images/image1.png";
function BaseComponent() {
  return (
    <>
      <Box className="main-body">
        <Box className="body-child1">
          <Typography variant="h4" sx={{ color: "#116dad" }}>
            Career at GTech-Dynamics
          </Typography>
          <Typography variant="p" className="hr-lines">
            Jobs
          </Typography>
          <Typography variant="h3" className="typography">
            Open Positions
          </Typography>
          <Box className="inner-child1">
            <Typography>Let’s broaden your skillset together</Typography>
          </Box>
        </Box>
        <Box className="body-child2">
          <Grid container spacing={2} className="careers-grid">
            <Grid item xs={12} sm={6} className="careers-grid-child1">
              <Box>
                <Typography variant="h5">Become An IT Expert</Typography>
                <Typography variant="p">
                  If you think you have the suitable skill set, are passionate
                  about technology, and are aware of the rising technological
                  trends, we want you on our team. You are exactly who we’re
                  looking for! Show us your talent and experience with your
                  portfolio.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} className="careers-grid-child2">
              <img src={image1} alt="Logo" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default BaseComponent;

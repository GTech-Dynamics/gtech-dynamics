import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import image1 from "../../static/images/how-we-work.jpg";
function AboutBase() {
  return (
    <Grid container spacing={2} className="about-child1">
      <Grid item xs={12} md={6}>
        <Box className="background">
          <Box className="img-container">
            <img src={image1} alt="Background" className="img" />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} className="right">
        <Box className="right-child1">
          <Typography className="title" variant="p">
            About Us
          </Typography>
          <Typography className="subtitle" variant="h3">
            We can take your business to the
            <span className="span"> next level.</span>
          </Typography>
          <Typography variant="p" className="description">
            Catalyzing Success in the Digital Age: GTech Dynamics is your
            premier partner for comprehensive IT solutions and consultancy
            services. With a relentless focus on innovation, we empower
            businesses to navigate and thrive in today's rapidly evolving
            technological landscape. Our seasoned experts leverage cutting-edge
            strategies and tailor-made solutions to drive efficiency, growth,
            and success. From transformative digital initiatives to strategic
            consultancy, trust GTech Dynamics to elevate your business to new
            heights in the digital realm.
          </Typography>
        </Box>
        <Box className="right-child2">
          <Typography variant="p">
            As of now, we are a team of 50+ Software Engineers & developers
            offering wide-ranging skills that can enhance the design and
            execution of any digital product development project. Our services
            cover the Software Development Life Cycle (SDLC), from design and
            architecture to development, QA, and maintenance.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AboutBase;

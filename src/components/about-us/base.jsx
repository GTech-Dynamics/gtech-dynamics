import React from "react";
import "../../style/about-us.css";
import { Box, Grid, Typography } from "@mui/material";
import image1 from "../../static/images/image1.png";
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
          <Typography className="title" variant="h6">
            About Us
          </Typography>
          <Typography className="subtitle" variant="body1">
            We can take your business to the
            <span className="span"> next level.</span>
          </Typography>
          <Typography variant="p" className="description">
            Code Graphers develops digital solutions to bring every unique and
            ambitious web and mobile project into virtual reality since 2021. We
            hook you up with a team of highly skilled developers who can provide
            you with customized solutions, whether you’re a startup, SaaS
            company, eCommerce shop, or digital agency. Our team of experts
            includes UI/UX designers, testers, and project managers that you’ll
            get to know and trust.
          </Typography>
        </Box>
        <Box className="right-child2">
          <Typography>
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

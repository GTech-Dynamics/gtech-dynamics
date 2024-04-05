import React from "react";
import "../../style/work.css";
import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import image1 from "../../static/images/image1.png";
function WorkBase() {
  return (
    <Grid container spacing={2} className="work-parent">
      <Grid item xs={12} md={6}>
        <Box className="child1">
          <Typography className="title" variant="p">
            HOW WE WORK
          </Typography>
          <Typography className="subtitle" variant="h3">
            We Take Your Business To The
            <span className="span"> Next Level.</span>
          </Typography>
          <Typography variant="p" className="description">
            It’s a known fact that a business is the brainchild of its owner(s).
            We understand how important it is to streamline the workflow
            processes of your business, so it operates seamlessly. Here at Gtech
            Dynamics, our professional teams take into account all your business
            requirements and concerns to develop a top-notch end-product that
            addresses all your business needs. It’s safe to say you take the
            right step by choosing Gtech Dynamics. We guarantee to take your
            business to the flourishing peaks that you have always envisioned.
          </Typography>
          <Typography variant="p">We ensure</Typography>
          <List className="list">
            <ListItem className="listitem">
              24*7 professional support by our professionals to address business
              queries.
            </ListItem>
            <ListItem className="listitem">
              To give nothing less than extraordinary and stellar business
              solutions and product designs.
            </ListItem>
            <ListItem className="listitem">
              Envisioning a business from a professional perspective to deliver
              quality custom solutions.
            </ListItem>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box className="child2">
          <img src={image1} alt="Background" className="work-img" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default WorkBase;

import React from "react";
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import "../../style/portfolio.css";
import LinkIcon from "@mui/icons-material/Link";

const GridComponent = ({ items }) => {
  const handleLink = (websiteUrl) => {
    window.open(websiteUrl, "_blank");
  };
  return (
    <Grid container spacing={2} className="portfolio-grid">
      {items.map((item, index) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
          <Card
            className="portfolio-card"
            sx={{ backgroundImage: item.background }}
          >
            <CardContent className="card-content">
              <Typography variant="h5" gutterBottom className="card-heading">
                {item.heading}
              </Typography>
              <Typography variant="p" component="p" className="card-desc">
                {item.description}
              </Typography>
              <IconButton
                className="icon-button"
                onClick={() => handleLink(item.websiteUrl)}
              >
                <LinkIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridComponent;

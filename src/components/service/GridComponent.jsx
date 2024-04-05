import { Typography, Box, Card, CardContent, Grid } from "@mui/material";
import { items } from "./GridItems";
import React from "react";

const ServiceGrid = () => {
  return (
    <Box className="body-child2">
      <Grid container spacing={1} className="grid">
        {items.map((item, index) => (
          <Grid item sm={12} md={6} lg={4} key={index} className="grid-item">
            <Card className="service-card">
              <CardContent className="service-card-content">
                {React.cloneElement(item.icon, { style: { fontSize: 70 } })}
                <Typography variant="h5" gutterBottom className="card-heading">
                  {item.heading}
                </Typography>
                <Typography variant="p" component="p">
                  {item.description}
                </Typography>
              </CardContent>
              <Box className="service-card-overlay">
                <CardContent className="service-card-content">
                  {React.cloneElement(item.icon, { style: { fontSize: 70 } })}
                  <Typography variant="h5" gutterBottom>
                    {item.heading}
                  </Typography>
                  <Typography variant="p" component="p">
                    {item.description}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ServiceGrid;

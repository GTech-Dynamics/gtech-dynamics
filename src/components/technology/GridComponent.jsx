import { Box, Typography, Grid } from "@mui/material";
const TechnologyGrid = ({ items, home }) => {
  return (
    <Box className="body-child2">
      {home ? (
        <Grid container rowGap={2} className="home-grid">
          {items.map((item, index) => (
            <Grid item sm={12} md={6} lg={4} key={index} className="child-grid">
              <Grid container>
                <Grid item xs={12} sm={12} md={3} key={index} className="left">
                  <Box className="logo-container">{item.logo}</Box>
                </Grid>

                <Grid item sm={12} md={8} key={index} className="right">
                  <Typography variant="h6" className="icon-title">
                    <b>{item.heading}</b>
                  </Typography>
                  <Typography varaint="p">{item.description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2} className="technology-grid">
          {items.map((item, index) => (
            <Grid item xs={6} sm={2.5} key={index}>
              <Box textAlign="center">
                <img src={item.logo} alt="Logo" className="logo" />
                <Typography variant="p">
                  <b>{item.heading}</b>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
export default TechnologyGrid;

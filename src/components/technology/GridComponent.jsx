import { Box, Typography, Grid } from "@mui/material";
const TechnologyGrid = ({ items }) => {
  return (
    <Grid container spacing={2} className="technology-grid">
      {items.map((item, index) => (
        <Grid item xs={6} sm={6} md={2.5} lg={2.5} key={index}>
          <Box textAlign="center">
            <img src={item.logo} alt="Logo" className="logo" />
            <Typography variant="p">
              <b>{item.heading}</b>
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
export default TechnologyGrid;

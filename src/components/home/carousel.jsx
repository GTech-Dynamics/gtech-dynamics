import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Slide, Typography, Paper, Button} from '@mui/material';
import { ArrowForward }  from '@mui/icons-material'; 
import Carousel from 'react-material-ui-carousel'
import Image from '../../static/images/carousal_background.jpg'
const useStyles = makeStyles({
    root: {
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
      },
    carousalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        zIndex: '0.5',
        backdropFilter: 'blur(5px)',
    },
    carousal: {
        width: '100%',
        height: '100%',
    },
    carouselContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '100px',
      },
    
      
});

const CarouselComponent = ({ slides }) => {
  const classes = useStyles();
  var items = [
    {
        name: "Best It Solutions Company In The Global Community ",
        description: "We are a highly client-centric company that uses industry-leading best practices, cutting-edge tools &amp; technologies to ensure that you receive the highest quality services for…"
    },
    {
        name: "To Our Upcoming Buisness Partners And Clients",
        description: "We are a highly client-centric company that uses industry-leading best practices, cutting-edge tools &amp; technologies to ensure that you receive the highest quality services for…"
    }
];
  return (
    <Box 
       sx={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `cover`,
            height: "500px",
            width: "100%",
      }}
    className={classes.root}
    >
        <Box className={classes.carousalContainer}>
        <Carousel autoPlay={false} showArrows={true} showThumbs={false} showStatus={false} className={classes.carousal}>
          {items.map((item, i) => (
            <Box className={classes.carouselContent}>
                <Typography variant='h2'>{item.name}</Typography>
                <Typography variant="p">{item.description}</Typography>
            <Box sx={{
                display: 'flex',
                gap: '10px',
            }}>
                <Button variant="outlined" endIcon={<ArrowForward  color="white"/>} size="large" style={{ backgroundColor: 'white', color: 'black' }}>
                    About Us
                </Button>
                <Button variant="outlined" endIcon={<ArrowForward color="white"/>} size="large" style={{ backgroundColor: 'white', color: 'black' }}>
                    Contact Us
                </Button>
            </Box>
        </Box>
          ))}
        </Carousel>
    </Box>
    </Box>
  );
};

export default CarouselComponent;

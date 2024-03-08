import React from 'react';
import { Box, Typography, Button} from '@mui/material';
import { ArrowForward }  from '@mui/icons-material'; 
import Carousel from 'react-material-ui-carousel';
import Image from '../../static/images/carousal_background.jpg';
import CarousalWrapper from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';


const CarouselComponent = ({ slides }) => {
  var items = [
    {
        name: "Best It Solutions Company In The Global Community ",
        description: "We are a highly client-centric company that uses industry-leading best practices, cutting-edge tools &amp; technologies to ensure that you receive the highest quality services for…"
    },
    {
        name: "To Our Upcoming Buisness Partners And Clients",
        description: "We are a highly client-centric company that uses industry-leading best practices, cutting-edge tools &amp; technologies to ensure that you receive the highest quality services for…"
    },
    {
        name: "Best It Solutions And Buisness Services In Tech Market",
        description: "We are a highly client-centric company that uses industry-leading best practices, cutting-edge tools &amp; technologies to ensure that you receive the highest quality services for…"
    }
];
  return (
    <Box 
       sx={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `cover`,
        height: "600px",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <CarousalWrapper sx={{ 
            height: "100%",
            backdropFilter: 'blur(5px)',
            }}
        >
        <Carousel sx={{
            width: '100%',
            height: '100%',
        }}
        autoPlay={false}
        >
          {items.map((item, i) => (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                padding: '100px',
                animation: 'slideFromBottom 1.5s forwards, fadeIn 1.5s forwards',
                }}
            >
                <Typography variant='h2'>{item.name}</Typography>
                <Typography variant="p" sx={{margin: '15px'}}>{item.description}</Typography>

            <Box sx={{
                display: 'flex',
                gap: '10px',
                marginTop: '15px',
                }}
            >
                <Button variant="outlined" endIcon={<ArrowForward  color="white"/>} size="large" style={{ backgroundColor: 'white', color: 'black' }} component={Link} to="/about-us">
                    About Us
                </Button>
                <Button variant="outlined" endIcon={<ArrowForward color="white"/>} size="large" style={{ backgroundColor: 'white', color: 'black' }} component={Link} to="/contact-us">
                    Contact Us
                </Button>
            </Box>
        </Box>
          ))}
        </Carousel>
        </CarousalWrapper>
    </Box>
  );
};

export default CarouselComponent;

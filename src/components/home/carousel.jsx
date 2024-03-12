import React from 'react';
import { Box, Typography, Button} from '@mui/material';
import { ArrowForward }  from '@mui/icons-material'; 
import Carousel from 'react-material-ui-carousel';
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
    <Box className="parent">
          <Carousel className='carousal' autoPlay={false}>
            {items.map((item, i) => (
              <Box className="carousal-items ">
                <Typography variant='h2'>{item.name}</Typography>
                <Typography variant="p">{item.description}</Typography>
                <Box className="buttons-container">
                    <Button variant="outlined" endIcon={<ArrowForward  color="white"/>} size="large" component={Link} to="/about-us" className='button'>
                        About Us
                    </Button>
                    <Button variant="outlined" endIcon={<ArrowForward color="white"/>} size="large" component={Link} to="/contact-us"  className='button'>
                        Contact Us
                    </Button>
                </Box>
              </Box>
            ))}
          </Carousel>
        {/* </CarousalWrapper> */}
    </Box>
  );
};

export default CarouselComponent;

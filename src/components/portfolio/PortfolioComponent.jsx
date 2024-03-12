import React, {SyntheticEvent} from 'react';
import {Container, Typography, Box, Card, CardContent, Grid} from '@mui/material';
import { styled } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GridComponent from './GridComponent';
import {All, WebDevelopment, AppDevelopment, Ecommerce, CustomApplication} from './GridItems';

const PortfolioComponent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) =>  {
    console.log('in handle change', newValue)
    setValue(newValue);
  };
  
    const StyledHeading = styled(Typography)({
        fontFamily: 'sans-serif',
        margin: '100px auto',
        color: '#black',
        textAlign: 'center',
        fontSize: '30px',
        maxWidth: '600px',
        position: 'relative',
        '&:before, &:after': {
          content: '""',
          display: 'block',
          width: '50px',
          height: '3px',
          background: '#191970',
          position: 'absolute',
          top: '50%',
        },
        '&:before': {
          left: -60,
        },
        '&:after': {
          right: -60,
        }
      });

    return (
    <Container className='child2'>
       <Typography variant="h6" className='styled-heading'>Projects</Typography> 
       <Typography variant='h4'>Our Portfolio</Typography> 
       <Box>
            <Typography variant='p'>
            Our portfolio displays the strength of our skilled IT team. 
            Check out the list of our projects and the success we delivered to our client's business.
            </Typography>
       </Box> 
       <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All" />
        <Tab label="Custom Application" />
        <Tab label="Web Development" />
        <Tab label="App Development" />
        <Tab label="Ecommerce" />
      </Tabs>
      {value === 0 && <GridComponent items={All} />}
            {value === 1 && <GridComponent items={AppDevelopment} />}
            {value === 2 && <GridComponent items={WebDevelopment} />}
            {value === 3 && <GridComponent items={Ecommerce} />}
            {value === 4 && <GridComponent items={CustomApplication} />}
    </Box>
    </Container>
    
    )
}
export default PortfolioComponent;


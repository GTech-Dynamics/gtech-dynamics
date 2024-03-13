import React from 'react';
import {Container, Typography, Box} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GridComponent from './GridComponent';
import {All, WebDevelopment, AppDevelopment, Ecommerce, CustomApplication} from './GridItems';

const PortfolioComponent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) =>  {
    setValue(newValue);
  };

    return (
    <Container className='child2'>
       <Typography variant="h6" className='styled-portfolio-heading'>Projects</Typography>  
       <Typography variant='h4'>Our Portfolio</Typography> 
       <Box className="desc">
            <Typography variant='p'>
            Our portfolio displays the strength of our skilled IT team. 
            Check out the list of our projects and the success we delivered to our client's business.
            </Typography>
       </Box>
       <Box>
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


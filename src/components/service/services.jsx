import React from 'react';
import {Container, Typography, Box, Card, CardContent, Grid} from '@mui/material';
import { styled } from '@mui/styles';
import '../../style/service.css';
import { WebOutlined } from '@mui/icons-material';

const ServicesComponent = ({ slides }) => {
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

      const items = [
        {
        'icon': <WebOutlined />,
        'heading': 'Web Development',
        'description': 'Modern, feature-rich, and responsive cross-platform and cross-browser interactive web apps.'
      },
      {
        'icon': <WebOutlined />,
        'heading': 'Mobile App Development',
        'description': 'Feature-packed solutions for Android, iOS, and cross-platform mobile apps targeting any industry.'
      },
      {
        'icon': <WebOutlined />,
        'heading': 'Custom Software Development',
        'description': 'Feature-packed solutions for Android, iOS, and cross-platform mobile apps targeting any industry.'
      },
      {
        'icon': <WebOutlined />,
        'heading': 'Staff Augmentation',
        'description': 'Streamline your business operations without worrying about hiring the perfect talent because we do it for you.'
      },
      {
        'icon': <WebOutlined />,
        'heading': 'QA & Testing',
        'description': 'Identifying and resolving technical issues through standard industry practices to ensure your business stays afloat.'
      },
        {
        'icon': <WebOutlined />,
        'heading': 'Product Management',
        'description': 'Supporting and managing processes in product’s lifecycle to ensure valuable products are launched in the market.'
      },
      
    ]
    return (
    <Container className='child1'>
       <Typography variant='h4' className='styled-heading'>SERVICES</Typography> 
       <Typography variant='h4'>Services We Provide</Typography> 
       <Box className="child2">
            <Typography variant='body1'>
                Gtech Dynamics is a client-focused company that focuses on providing the best IT 
                services. Let the professionals handle the heavy work for you. Our top priority is to provide industry-leading
                solutions and products adhering to market standards while ensuring only the in-demand standard 
                practices of the IT industry as utilized.
            </Typography>
       </Box> 

       <Grid container spacing={2} className='grid'>
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="service-card" sx={{boxShadow: 5 }}>
                            <CardContent sx={{ textAlign: 'center', padding: '30px' }}>
                                {React.cloneElement(item.icon, { style: { fontSize: 70 } })}
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {item.heading}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
    </Container>
    )
}
export default ServicesComponent;


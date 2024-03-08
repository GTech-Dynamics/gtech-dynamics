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
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px',
    }}>
       <StyledHeading variant="h6" sx={{padding: '5px'}}>SERVICES</StyledHeading> 
       <Typography variant='h4' sx={{ fontWeight: 'bold', padding: '5px' }}>Services We Provide</Typography> 
       <Box sx={{
                width: '60%',
                padding: '10px'
            }}
        >
            <Typography variant='body1' sx={{ textAlign: 'center' }}>
                Gtech Dynamics is a client-focused company that focuses on providing the best IT 
                services. Let the professionals handle the heavy work for you. Our top priority is to provide industry-leading
                solutions and products adhering to market standards while ensuring only the in-demand standard 
                practices of the IT industry as utilized.
            </Typography>
       </Box> 

       <Grid container spacing={2} justifyContent="center" sx={{margin: '5px'}}>
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="service-card" sx={{boxShadow: 5 }}>
                            <CardContent sx={{ textAlign: 'center', padding: '30px' }}>
                                {React.cloneElement(item.icon, { style: { fontSize: 70 } })}
                                <Typography variant="h5" component="h2" gutterBottom sx={{margin:'5px'}}>
                                    {item.heading}
                                </Typography>
                                <Typography variant="body2" component="p" sx={{marginTop:'30px'}}>
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


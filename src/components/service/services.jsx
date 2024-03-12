import React from 'react';
import {Container, Typography, Box, Card, CardContent, Grid} from '@mui/material';
import '../../style/service.css';
import { WebOutlined } from '@mui/icons-material';

const ServicesComponent = () => {
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
            <Typography variant='p'>
                Gtech Dynamics is a client-focused company that focuses on providing the best IT 
                services. Let the professionals handle the heavy work for you. Our top priority is to provide industry-leading
                solutions and products adhering to market standards while ensuring only the in-demand standard 
                practices of the IT industry as utilized.
            </Typography>
       </Box> 

       <Grid container spacing={2} className=''>
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="service-card">
                            <CardContent  className='service-card-content'>
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


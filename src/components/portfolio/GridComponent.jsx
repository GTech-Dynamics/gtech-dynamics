import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import '../../style/portfolio.css';

const GridComponent = ({ items }) => {
    return (
        <Grid container spacing={2} sx={{ margin: '5px' }}>
            {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className="portfolio-card" sx={{ boxShadow: 5, backgroundImage: item.background, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <CardContent className="card-content" sx={{padding: '30px', position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'rgba(0, 0, 0, 0.7)', transition: 'bottom 0.3s', opacity: 0 }}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ margin: '5px', color: 'white' }}>
                                {item.heading}
                            </Typography>
                            <Typography variant="body2" component="p" sx={{ marginTop: '30px', color: 'white' }}>
                                {item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default GridComponent;


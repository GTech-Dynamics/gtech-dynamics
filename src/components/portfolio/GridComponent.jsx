import React from 'react';
import { Card, CardContent, Typography, Grid} from '@mui/material';
import '../../style/portfolio.css';

const GridComponent = ({ items }) => {
    return (
        <Grid container spacing={2} sx={{ margin: '5px' }}>
            {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className="portfolio-card" sx={{  backgroundImage: item.background}}>
                        <CardContent className="card-content" >
                            <Typography variant="h5" component="h2" gutterBottom className='typography'>
                                {item.heading}
                            </Typography>
                            <Typography variant="body2" component="p"  className='typography'>
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


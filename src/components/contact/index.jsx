import { Box, Typography, Grid, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { styled } from '@mui/styles';
function Contact() { 
    const StyledHeading = styled(Typography)({
        fontFamily: 'sans-serif',
        color: '#black',
        textAlign: 'center',
        fontSize: '30px',
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
          left: 380,
        },
        '&:after': {
          right: 380,
        }
      });

      const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        agree: false,
      });
    
    return (
      <>
      <Box sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '100px'}}>
        <Box sx={{width: '80%', textAlign: 'center', color:'black', fontWeight: 'bold'}}>
            <Typography variant='h4'>Code Graphers - Contact Us Page</Typography>
            <StyledHeading variant="h6" sx={{padding: '3px', marginTop: '30px'}}>CONTACT US</StyledHeading> 
            <Typography variant='h2' sx={{marginTop: '30px'}}>Get In Touch With Us</Typography>
            <Typography sx={{paddingTop:'3px', color: 'black', marginTop: '30px'}}>Gtech Dynamics designs tailor-made software solutions and services for businesses in all domains.
                Leave us a message if you have any questions related to our services or how we work and we will get back to you as soon as possible.</Typography>
            
            <Grid container spacing={2} sx={{marginTop: '80px'}}>
                <Grid item xs={12} sm={12} md={4} sx={{marginTop: '80px',  textAlign: 'left'}}>
                    <Typography variant="h4">Contact Us</Typography>
                    <Box sx={{ marginTop: '10px'}}>
                        <Typography variant="h5">Phone</Typography>
                        <Typography>USA Number: +1 564 224 5720</Typography>
                    </Box>
                    <Box sx={{ marginTop: '10px'}}>
                        <Typography variant="h5">Email</Typography>
                        <Typography>info@gtechdynamics.com</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                    <Box sx={{borderRadius:'15px', color: 'white', padding: '45px', backgroundColor: 'black'}}>
                        <form sx={{color: 'white'}}>
                            <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            name="firstName"
                                            required
                                            sx={{backgroundColor: 'white', borderRadius: '5px'}}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            name="lastName"
                                            required
                                            sx={{backgroundColor: 'white', borderRadius: '5px'}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            type="email"
                                            required
                                            sx={{backgroundColor: 'white', borderRadius: '5px'}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            name="subject"
                                            required
                                            sx={{backgroundColor: 'white', borderRadius: '5px'}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label="Message"
                                            name="message"
                                            required
                                            sx={{backgroundColor: 'white', borderRadius: '5px'}}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{color: 'white', textAlign: 'left'}}>
                                        <FormControlLabel
                                            control={<Checkbox checked={formData.agree} name="agree" sx={{ color: 'white'}}  disabled={false} />}
                                            label="I agree to the terms and conditions"
                                            
                                        />
                                    </Grid>
                                
                                    <Button type="submit" variant="contained" sx={{backgroundColor:'white', color: 'black', margin: '20px', fontWeight: 'bold'}}>
                                        Send Message
                                    </Button>
                                </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
      </> 
    );
  }
  
  export default Contact;
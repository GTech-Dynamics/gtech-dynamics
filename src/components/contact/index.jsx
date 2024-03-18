import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useEffect } from "react";
import "../../style/contact.css";
function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });

  useEffect(() => {
    document.title = "Contact Us - Gtech Dynamics";
  }, []);

  return (
    <Box className="contact-parent">
      <Box className="contact-child1">
        <Typography variant="h4">Gtech Dynamics - Contact Us Page</Typography>
        <Typography variant="h6" className="contact-styled-heading">
          CONTACT US
        </Typography>
        <Typography variant="h2" sx={{ marginTop: "30px" }}>
          Get In Touch With Us
        </Typography>
        <Typography>
          Gtech Dynamics designs tailor-made software solutions and services for
          businesses in all domains. Leave us a message if you have any
          questions related to our services or how we work and we will get back
          to you as soon as possible.
        </Typography>
        <Grid container spacing={2} className="parent-grid">
          <Grid item xs={12} sm={12} md={4} className="child-grid1">
            <Typography variant="h4">Contact Us</Typography>
            <Box>
              <Typography variant="h5">Phone</Typography>
              <Typography>USA Number: +1 564 224 5720</Typography>
            </Box>
            <Box>
              <Typography variant="h5">Email</Typography>
              <Typography>info@gtechdynamics.com</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={8} className="child-grid2">
            <form sx={{ color: "white" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    required
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    required
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    required
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    required
                    className="custom-textfield"
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
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={12} sx={{ color: "white", textAlign: "left" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.agree}
                        name="agree"
                        sx={{ color: "white" }}
                        disabled={false}
                      />
                    }
                    label="I agree to the terms and conditions"
                  />
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  className="form-button"
                >
                  Send Message
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Contact;

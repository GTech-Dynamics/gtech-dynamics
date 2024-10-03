import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../style/contact.css";
import axios from "axios";
import { toast } from "react-hot-toast";

function Contact() {
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.REACT_APP_WEB3_FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const myPromise = axios
      .post("https://api.web3forms.com/submit", json, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("response", response.data.message);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const errors = err.response.data.errors;
          if (errors) {
            errors.forEach((error) => {
              toast.error("Failed: " + error["message"]);
            });
          }
        }
      })
      .then(function () {
        setFormLoading(false);
      });

    toast.promise(myPromise, {
      loading: "Loading",
      success: "Thanks for your submission!",
      error: "Oops! There was a problem submitting your form",
    });
  };

  useEffect(() => {
    document.title = "Contact Us - GTech Dynamics";
  }, []);

  return (
    <Box className="contact-parent">
      <Box className="main-body">
        <Box className="body-child1">
          <Typography variant="h4">GTech Dynamics - Contact Us Page</Typography>
          <Typography variant="p" className="hr-lines">
            CONTACT US
          </Typography>
          <Typography variant="h3" className="typography">
            Get In Touch With Us
          </Typography>
          <Box className="inner-child1">
            <Typography>
              GTech Dynamics designs tailor-made software solutions and services
              for businesses in all domains. Leave us a message if you have any
              questions related to our services or how we work and we will get
              back to you as soon as possible.
            </Typography>
          </Box>
        </Box>
        <Box className="contact-body-child2">
          <Grid container spacing={2} className="contact-grid">
            <Grid item xs={12} sm={12} md={4} className="child-grid1">
              <Typography variant="h3">Contact Us</Typography>
              <Box>
                <Typography variant="h5">Phone</Typography>
                <Typography variant="p">Number: +92 323 0496310</Typography>
              </Box>
              <Box>
                <Typography variant="h5">Email</Typography>
                <Typography variant="p">info@gtechdynamics.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} className="child-grid2">
              <form
                sx={{ color: "white" }}
                action="https://formspree.io/f/xzbweknb"
                onSubmit={handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="First Name"
                      name="firstName"
                      className="custom-textfield"
                      variant="outlined"
                      disabled={formLoading}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Last Name"
                      name="lastName"
                      className="custom-textfield"
                      variant="outlined"
                      disabled={formLoading}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Email"
                      name="email"
                      type="email"
                      className="custom-textfield"
                      variant="outlined"
                      disabled={formLoading}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Subject"
                      name="subject"
                      className="custom-textfield"
                      variant="outlined"
                      disabled={formLoading}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      placeholder="Message"
                      name="message"
                      className="custom-textfield"
                      variant="outlined"
                      disabled={formLoading}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ color: "black", textAlign: "left" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#1b155e",
                          }}
                        />
                      }
                      label="I agree to the terms and conditions"
                      sx={{ color: "#737373" }}
                    />
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={formLoading}
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
    </Box>
  );
}

export default Contact;

import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FaDesktop, FaHeart, FaCog } from "react-icons/fa";

const About = () => {
  return (
    <Container style={{ padding: "128px 16px" }} id="about">
      <Typography variant="h3" align="center" gutterBottom>
        ABOUT THE COMPANY
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Key features of our company
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <FaDesktop size={64} color="blue" />
          <Typography variant="h6" gutterBottom>
            Responsive
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FaHeart size={64} color="red" />
          <Typography variant="h6" gutterBottom>
            Passion
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FaDesktop size={64} color="green" />
          <Typography variant="h6" gutterBottom>
            Design
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FaCog size={64} color="orange" />
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

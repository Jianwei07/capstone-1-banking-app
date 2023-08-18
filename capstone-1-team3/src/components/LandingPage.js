import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import LandingPageStyles from "./LandingPage.css"; // Import the CSS module
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <AppBar className={LandingPageStyles.appBar} position="static">
        <Toolbar>
          <img
            className={LandingPageStyles.logo}
            src="your-logo.png"
            alt="Logo"
          />
          <Box className={LandingPageStyles.headerButtons}>
            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
            <Button color="inherit" onClick={() => navigate('/registration')}>Sign Up</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography
          variant="h2"
          align="center"
          className={LandingPageStyles.introduction}
        >
          Welcome to InnoPay!
        </Typography>
        <img src="your-intro-image.jpg" alt="Introduction" width="100%" />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod orci eu ligula ultrices, vel malesuada metus volutpat. Sed
          sollicitudin massa eu fermentum. Fusce lacinia, urna nec facilisis
          scelerisque, ex libero eleifend quam, quis varius sapien ligula nec
          ex. Curabitur vehicula urna a ex aliquet eleifend. Fusce auctor non
          nunc non pellentesque. Vivamus tempus justo quis quam auctor placerat.
          Pellentesque hendrerit arcu sed massa scelerisque, id fringilla ante
          scelerisque. Aenean sagittis orci ut lectus dictum, sed gravida dolor
          fringilla. Donec pulvinar lorem eu neque tincidunt, at pharetra risus
          pulvinar. Nulla facilisi. Sed hendrerit id metus a bibendum.
        </Typography>
        {/* Add more content here */}
      </Container>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeProvider";

function Contact() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{display:"flex"}}
      justifyContent="center"
      alignItems='center'
      bgcolor={theme.dirtyGold}
      color="black"
      minHeight="100vh"
      px={8}
    >
      <Grid container py={6} spacing={5} justifyContent="center">
        <Grid item xs={12} sm={12} md={12} textAlign="center">
          <Typography
            fontFamily={theme.fontFamily}
            variant="h2"
            fontSize="50px"
            fontWeight="bold">
            InnovPay: Where Security, Innovation, and Prosperity Converge for You.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} textAlign="center">
          <Typography
            fontFamily={theme.fontFamily}
            variant="susbtitle1"
            fontSize="20px">
            Step into the future of finance within a transparent community.
            <br></br>
            Secure, diverse, and empowering solutions await your journey.
          </Typography>
        </Grid>
        <Grid item textAlign="center">
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/registration")}
            sx={{
              borderRadius: "10px",
              backgroundColor: theme.deepNavy,
              color: theme.lightGrey,
              fontFamily: theme.fontFamily,
              fontWeight: "bold",
              width: "200px",
              height: "60px",
              m:"10px",
              "&:hover": {
                backgroundColor: theme.lightNavy,
              },
              "&:focus": {
                outline: "none",
              },
            }}
          >
            OPEN AN ACCOUNT
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/Getintouch")}
            mr={3}
            sx={{
              borderRadius: "10px",
              backgroundColor: theme.lightGrey,
              color: "black",
              fontFamily: theme.fontFamily,
              fontWeight: "bold",
              width: "200px",
              height: "60px",
              m:"10px",
              "&:hover": {
                backgroundColor: theme.dirtyGold,
              },
              "&:focus": {
                outline: "none",
              },
            }}
          >
            Get In Touch
          </Button>

        </Grid>
      </Grid>
    </Box>

  );
}

export default Contact;

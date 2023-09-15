import React from "react";
import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import { useTheme } from "../ThemeProvider";

const GetInTouch = () => {
  const theme = useTheme();
  const handleLogOut = () => {
    alert("Thank you for your inquiry!");
  };
  return (
    <Box
      minHeight="100vh"
      id="Getintouch"
      justifyContent="center"
      alignItems="center"
      sx={{ display: "flex" }}
      p={6}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            variant="h1"
            color="white"
            fontFamily={theme.fontFamily}
            fontSize="64px"
            fontWeight="700"
            mb={3}
          >
            <span style={{ color: theme.lightGold }}>Contact</span> us
          </Typography>
          <Typography
            color="white"
            variant="body1"
            paragraph
            fontFamily={theme.fontFamily}
            fontSize="28px"
            fontWeight="300"
          >
            Need to get in touch with us? Either fill out the form with your
            personal inquiry or find the support email you’d like to contact
            below.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <form>
            <Box
              border="1px solid #000"
              background={theme.deepNavy}
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="10px"
              padding="40px"
              spacing={2}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={7}>
                  <Typography variant="body1" color="white" mb={1}>
                    First Name:
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{ backgroundColor: theme.lightNavy, borderRadius: "10px" }}
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={5}>
                  <Typography variant="body1" color="white" mb={1}>
                    Last Name:
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{ backgroundColor: theme.lightNavy, borderRadius: "10px" }}
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid >

                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="body1" color="white" mb={1}>
                    Email:
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{ backgroundColor: theme.lightNavy, borderRadius: "10px" }}
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} mb={5}>
                  <Typography variant="body1" color="white" mb={1}>
                    What can we help you with?
                  </Typography>
                  <TextField
                    multiline
                    variant="outlined"
                    minRows={5}
                    fullWidth
                    inputProps={{ style: { color: "white" } }}
                    sx={{
                      backgroundColor: theme.lightNavy,
                      borderRadius: "10px",
                      resize: "vertical",
                    }}
                  />
                </Grid>

                <Grid item >
                  <Button
                    onClick={handleLogOut}
                    variant="contained"
                    sx={{
                      width: "150px",
                      height: "50px",
                      bgcolor: theme.veryLightGold,
                      color: "black",
                      fontFamily: theme.fontFamily,
                      fontWeight: "bold",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: theme.lightGrey,
                      },
                      "&:focus": {
                        outline: "none",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetInTouch;

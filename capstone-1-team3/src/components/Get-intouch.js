import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  TextareaAutosize,
  Grid,
} from "@mui/material";

const GetInTouch = () => {
  const handleLogOut = () => {
    alert("Thank you for your inquiry!");
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
      id="Getintouch"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding={{ xs: "0px 20px", md: "0px 40px" }}
      bgcolor="#152840"
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              variant="h1"
              align="left"
              color="white"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "64px",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "#F8F3A3" }}>Contact</span> us
            </Typography>
            <Typography
              color="white"
              variant="body1"
              align="left"
              paragraph
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 300,
                fontSize: "28px",
                width: "100%",
                marginBottom: "0px",
              }}
            >
              Need to get in touch with us? Either fill out the form with your
              personal inquiry or find the support email you’d like to contact
              below.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            width="500px"
            height="500px"
            border="1px solid #000"
            background="#152840"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="20px"
          >
            <form style={{ width: "100%", padding: "20px" }}>
              <div
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  gap: "32px",
                }}
              >
                <div style={{ width: "240px" }}>
                  <Typography variant="body1" color="white">
                    First Name:
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    sx={{ backgroundColor: "#47546C", borderRadius: "10px" }}
                    inputProps={{ style: { color: "#F8F3A3" } }}
                  />
                </div>
                <div style={{ width: "150px" }}>
                  <Typography variant="body1" color="white">
                    Last Name:
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    sx={{ backgroundColor: "#47546C", borderRadius: "10px" }}
                    inputProps={{ style: { color: "#F8F3A3" } }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "10px", width: "422px" }}>
                <Typography variant="body1" color="white">
                  Email:
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  sx={{
                    backgroundColor: "#47546C",
                    borderRadius: "10px",
                  }}
                  inputProps={{ style: { color: "#F8F3A3" } }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <Typography variant="body1" color="white">
                  What can we help you with?:
                </Typography>
                <TextareaAutosize
                  variant="outlined"
                  margin="dense"
                  style={{
                    backgroundColor: "#47546C",
                    width: "422px",
                    height: "150px",
                    borderRadius: "10px",
                    resize: "none",
                    padding: "10px",
                    border: "none",
                    color: "#F8F3A3",
                  }}
                  rows={4}
                />
              </div>

              <Button
                onClick={handleLogOut}
                fullWidth
                variant="contained"
                sx={{
                  width: "100px",
                  height: "40px",
                  marginTop: "10px",
                  backgroundColor: "#F8F3A3",
                  color: "black",
                  fontFamily: "Open Sans",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetInTouch;

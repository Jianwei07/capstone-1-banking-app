import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import iPhone from "../style/iPhone.png";

const Hero = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        padding="10px 20px"
        spacing={0.5}
        sx={{ backgroundColor: "#2D2D2D" }}
        id="Hero"
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" align="left" color="white">
            Bringing Borders Closer with InnovPay
          </Typography>
          <Typography variant="subtitle1" align="left" paragraph color="white">
            InnovPay revolutionizes finance, uniting interest generation and
            currency exchange within a fortified multi-currency digital wallet,
            expanding your financial horizons.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
          }}
        >
          <img src={iPhone} width="60%" alt="iPhone" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

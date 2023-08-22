import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import iPhone from "../style/iPhone.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Grid
        container
        spacing={0.5}
        padding="100px 0px 20px 20px"
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
          <Typography
            variant="h1"
            align="left"
            color="white"
            sx={{
              fontFamily: "Open Sans",
              fontSize: "64px",
              fontWeight: 700,
              width: "768px",
            }}
          >
            Bringing Borders Closer with{" "}
            <span style={{ color: "#F8F3A3" }}>Innov</span>Pay
          </Typography>
          <Typography
            color="white"
            variant="subtitle1"
            align="left"
            paragraph
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 300,
              fontSize: "32px",
              width: "768px",
              height: "230px",
            }}
          >
            InnovPay revolutionizes finance, uniting interest generation and
            currency exchange within a fortified multi-currency digital wallet,
            expanding your financial horizons.
          </Typography>
          <div>
            <Button
              color="inherit"
              onClick={() => navigate("/registration")}
              sx={{
                borderRadius: "15px",
                backgroundColor: "#152840",
                color: "white",
                fontFamily: "Open Sans",
                fontWeight: "bold",
                width: "194px",
                height: "67px",
                margin: "0 0 10px 10px",
              }}
            >
              OPEN AN ACCOUNT
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                window.location.href =
                  "https://www.x-rates.com/table/?from=USD&amount=1";
              }}
              sx={{
                borderRadius: "15px",
                backgroundColor: "white",
                color: "black",
                fontFamily: "Open Sans",
                fontWeight: "bold",
                width: "194px",
                height: "67px",
                margin: "0 0 10px 10px",
              }}
            >
              EXCHANGE RATES
            </Button>
          </div>
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
          <img src={iPhone} width="65%" alt="iPhone" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

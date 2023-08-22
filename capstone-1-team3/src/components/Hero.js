import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import iPhone from "../style/iPhone.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Grid
        container
        spacing={0.5}
        padding="60px 120px 10px 20px"
        sx={{ backgroundColor: "#2D2D2D" }}
        id="Hero"
      >
        {/* Left Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
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
              Bringing Borders Closer with{""}
              <span style={{ color: "#F8F3A3" }}> Innov</span>Pay
            </Typography>
            <Typography
              color="white"
              variant="subtitle1"
              align="left"
              paragraph
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 300,
                fontSize: "28px",
                width: "768px",
                height: "230px",
                marginBottom: "0px",
              }}
            >
              <span style={{ color: "#F8F3A3" }}> Innov</span>Pay revolutionizes
              finance, uniting interest generation and currency exchange within
              a fortified multi-currency digital wallet, expanding your
              financial horizons.
            </Typography>
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
            {/* icons to preview features */}
            <Grid container spacing={3} justifyContent="left">
              <Grid item xs={12} sm={4} md={4}>
                <CurrencyExchangeIcon size={640} color="#e3f2fd" />
                <Typography color="white" variant="h6" gutterBottom>
                  Competitive Exchange Rates (42 Currencies)
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <AccountBalanceWalletIcon size={640} color="#e3f2fd" />
                <Typography color="white" variant="h6" gutterBottom>
                  Secure Multi-Currency Wallet
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <SavingsIcon size={640} color="#e3f2fd" />
                <Typography color="white" variant="h6" gutterBottom>
                  Earn 3.28% Interest
                </Typography>
                <Typography color="#white" variant="h10" gutterBottom>
                  T&C applies*
                </Typography>
              </Grid>
            </Grid>
            {/* icons to preview features */}
          </div>
        </Grid>

        {/* Right Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <img src={iPhone} width="65%" alt="iPhone" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

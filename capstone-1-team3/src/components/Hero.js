import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import iPhone from "../style/iPhone.png";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Grid
          container
          spacing={0.2}
          padding="60px 20px 10px 20px"
          sx={{
            backgroundColor: theme.palette.primary.main, // Use theme color
            minHeight: "100vh",
          }}
          id="Hero"
        >
          {/* Left Content */}
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div>
              <Typography
                variant="h1"
                align="left"
                color="white"
                sx={{
                  fontSize: "36px",
                  fontWeight: 650,
                  marginBottom: "10px",
                }}
              >
                Bringing Borders Closer with
                <span style={{ color: "#F8F3A3" }}> Innov</span>Pay
              </Typography>
              <Typography
                color="white"
                variant="subtitle1"
                align="left"
                paragraph
                sx={{
                  fontWeight: 300,
                  fontSize: "20px",
                  // height: "230px",
                  marginBottom: "20px",
                }}
              >
                <span style={{ color: "#F8F3A3" }}> Innov</span>Pay
                revolutionizes finance, uniting interest generation and currency
                exchange within a fortified multi-currency digital wallet,
                expanding your financial horizons.
              </Typography>
              <Button
                onClick={() => navigate("/registration")}
                sx={{
                  borderRadius: "15px",
                  backgroundColor: "#152840",
                  color: "white",
                  fontFamily: "Open Sans",
                  fontWeight: "bold",
                  width: "194px",
                  height: "50px",
                  margin: "0 0 10px 10px",
                  "&:hover": {
                    backgroundColor: theme.palette.deepNavy,
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                OPEN AN ACCOUNT
              </Button>
              <Button
                component="a"
                href="https://www.x-rates.com/table/?from=USD&amount=1"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: "15px",
                  backgroundColor: theme.palette.light,
                  color: "black",
                  fontFamily: "Open Sans",
                  fontWeight: "bold",
                  width: "194px",
                  height: "50px",
                  margin: "0 0 10px 10px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                EXCHANGE RATES
              </Button>
              {/* icons to preview features */}
              <Grid
                container
                spacing={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginTop: "20px",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <CurrencyExchangeIcon
                    sx={{
                      fontSize: 50,
                      color: theme.palette.light,
                      marginBottom: "8px",
                    }}
                  />
                  <Typography
                    fontSize="16px"
                    color="white"
                    variant="h6"
                    gutterBottom
                  >
                    Competitive Exchange Rates (42 Currencies)
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center", // Center the text horizontally
                  }}
                >
                  <AccountBalanceWalletIcon
                    sx={{
                      fontSize: 50,
                      color: theme.palette.light,
                      marginBottom: "8px",
                    }}
                  />
                  <Typography
                    fontSize="16px"
                    color="white"
                    variant="h6"
                    gutterBottom
                  >
                    Secure Multi-Currency Wallet
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <SavingsIcon
                    sx={{
                      fontSize: 50,
                      color: theme.palette.light,
                      marginBottom: "8px",
                    }}
                  />
                  <Typography fontSize="16px" color="white" variant="h6">
                    Earn 3.28% Interest
                  </Typography>
                  <Typography
                    fontSize="10px"
                    color="white"
                    variant="h6"
                    gutterBottom
                  >
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
            sm={12}
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={iPhone}
              width="70%"
              alt="iPhone"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Hero;

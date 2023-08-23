import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SpeedIcon from "@mui/icons-material/Speed";
import DevicesIcon from "@mui/icons-material/Devices";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

const KeyFeatures = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        id="about"
        sx={{
          backgroundColor: theme.palette.deepNavy,
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center", // Center horizontally
        }}
      >
        <Grid
          container
          padding="50px 50px"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          alignItems="center"
        >
          <Grid
            item
            xs={9}
            sm={9}
            md={9}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              align="left"
              color="white"
              sx={{
                fontWeight: 500,
                fontSize: "58px",
                marginBottom: "10px",
              }}
            >
              Evolve your wallet efficiency with{" "}
              <span style={{ color: "#F8F3A3" }}> Innov</span>Pay competitive
              exchange rates and Interest API
            </Typography>

            <Typography
              variant="subtitle1"
              align="left"
              paragraph
              color="white"
              sx={{
                fontWeight: 200,
                fontSize: "24px",
              }}
            >
              <span style={{ color: "#F8F3A3" }}> Innov</span>Pay revolutionizes
              finance, uniting interest generation and currency exchange within
              a fortified multi-currency digital wallet, expanding your
              financial horizons.
            </Typography>
          </Grid>
          <Box width="100%" />
          <Grid item xs={4}>
            <Button
              variant="contained"
              onClick={() => navigate("/Getintouch")}
              sx={{
                width: "150px",
                height: "50px",
                color: "black",
                borderRadius: "15px",
                backgroundColor: "#F6F3A3",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: theme.palette.dirtyGold,
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

        <Grid
          container
          padding="10px 50px"
          columns={10}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            backgroundColor: theme.palette.deepNavy,
            justifyContent: "center",
          }}
          alignItems="flex-start"
        >
          {/* First Feature */}
          <Grid
            item
            xs={2}
            alignItems="center"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CurrencyExchangeIcon
              sx={{ fontSize: 100, color: theme.palette.dirtyGold }}
            />
            <Typography
              variant="subtitle1"
              paragraph
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Competitive Exchange Rates (42 Currencies)
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="pink"
              sx={{
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Access 42 rates for global transactions, maximizing the value of
              your currencies.
            </Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <AccountBalanceWalletIcon
              sx={{ fontSize: 100, color: theme.palette.dirtyGold }}
            />
            <Typography
              variant="subtitle1"
              paragraph
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Secure Multi-Currency Wallet
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="pink"
              sx={{
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Rest easy with InnovPay's state-of-the-art secure MultiCurrency
              Wallet, protecting your assets and transactions.
            </Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <SavingsIcon
              sx={{ fontSize: 100, color: theme.palette.dirtyGold }}
            />
            <Typography
              variant="subtitle1"
              paragraph
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Earn 3.28% Interest T&C applies*
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="pink"
              sx={{
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Elevate your financial possibilities through a remarkable 3.28%
              interest rate, ushering in new avenues of prosperity.
            </Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <SpeedIcon sx={{ fontSize: 100, color: theme.palette.dirtyGold }} />
            <Typography
              variant="subtitle1"
              paragraph
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Instant Cross-Border Remittances
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="pink"
              sx={{
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Seamlessly send and receive money across the globe with
              lightning-fast remittances, simplifying international
              transactions.
            </Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <DevicesIcon
              sx={{ fontSize: 100, color: theme.palette.dirtyGold }}
            />
            <Typography
              variant="subtitle1"
              paragraph
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              AI-Driven Financial Insights
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="pink"
              sx={{
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Harness personalized AI insights, gaining valuable perspectives
              that guide your financial decisions for optimal growth.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default KeyFeatures;

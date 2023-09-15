import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SpeedIcon from "@mui/icons-material/Speed";
import DevicesIcon from "@mui/icons-material/Devices";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeProvider";

const KeyFeatures = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      id="KeyFeatures"
      bgcolor={theme.deepNavy}
      minHeight="100vh"
      alignItems="center"
      px={8}
      sx={{display:"flex",flexDirection: "column"}}
    >
      {/* The first part */}
      <Grid
        container
        py={6}
        rowSpacing={5}
      >
        <Grid
          item
          xs={12} sm={9} md={9}
        >
          <Typography
            variant="h2"
            color="white"
            fontSize="58px"
          >
            Evolve your wallet efficiency with{" "}
            <span style={{ color: theme.lightGold }}>Innov</span>Pay competitive
            exchange rates and Interest API
          </Typography>
        </Grid>

        <Grid
          item
          xs={12} sm={9} md={9}
        >
          <Typography
            variant="subtitle1"
            paragraph
            color="white"
            fontSize="20px"
          >
            Discover a new era of financial evolution with InnovPay. Our platform empowers your wallet product with 42 highly competitive exchange rates, facilitating seamless global transactions. Experience the security of our MultiCurrency Wallet, safeguarding your assets across currencies. Earn 3.28% interest, propelling your financial growth. Worry less, live more.
          </Typography>
        </Grid>

        <Box width="100%"/>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => navigate("/Getintouch")}
            sx={{
              width: "150px",
              height: "50px",
              bgcolor: theme.veryLightGold,
              color: "black",
              borderRadius: "15px",
              fontWeight: "bold",
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

      {/* The second part */}
      <Grid
        container
        columns={15}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        bgcolor={theme.deepNavy}
        justifyContent= "center"
        alignItems="flex-start"
        pt={2}
        pb={6}
      >
        <Grid
          item
          xs={15} sm={5} md={3}
        >
          <CurrencyExchangeIcon
            sx={{ fontSize: 100, color: theme.dirtyGold }}
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
          xs={15} sm={5} md={3}
        >
          <AccountBalanceWalletIcon
            sx={{ fontSize: 100, color: theme.dirtyGold }}
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
          xs={15} sm={5} md={3}
        >
          <SavingsIcon
            sx={{ fontSize: 100, color: theme.dirtyGold }}
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
          xs={15} sm={5} md={3}
        >
          <SpeedIcon sx={{ fontSize: 100, color: theme.dirtyGold }} />
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
          xs={15} sm={5} md={3}
        >
          <DevicesIcon
            sx={{ fontSize: 100, color: theme.dirtyGold }}
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

  );
};

export default KeyFeatures;

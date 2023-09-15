import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import iPhone from "../style/iPhone.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeProvider";

const Hero = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      px={8}
      bgcolor={theme.darkGrey}
      minHeight="100vh"
      alignItems="center"
      id="Hero"
      sx={{ display: "flex", flexDirection: "column"}}
    >
      <Grid
        container
        py={6}
      >
        {/* Left Content */}
        <Grid
          item
          xs={12} md={7} sm={12}
          justifyContent="space-between"
        >
          <Typography
            variant="h1"
            color="white"
            fontSize="64px"
            mb={4}
            fontWeight="650"
          >
            Bringing Borders Closer with
            <span style={{ color: theme.lightGold }}> Innov</span>Pay
          </Typography>
          <Typography
            color="white"
            variant="subtitle1"
            paragraph
            fontSize="28px"
            mb={6}
          >
            <span style={{ color: theme.lightGold }}> Innov</span>Pay
            revolutionizes finance, uniting interest generation and currency
            exchange within a fortified multi-currency digital wallet,
            expanding your financial horizons.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/registration")}
            sx={{
              width: "200px",
              height: "70px",
              borderRadius: "15px",
              bgcolor: theme.deepNavy,
              color: "white",
              fontFamily: theme.fontFamily,
              fontWeight: "bold",
              mr: "30px",
              mb: "20px",
              "&:hover": {
                backgroundColor: theme.tiffany,
                color: "black"
              },
              "&:focus": {
                outline: "none",
              },
            }}
          >
            OPEN AN ACCOUNT
          </Button>
          <Button
            href="https://www.x-rates.com/table/?from=USD&amount=1"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: "15px",
              backgroundColor: theme.lightGrey,
              color: "black",
              fontFamily: theme.fontFamily,
              fontWeight: "bold",
              width: "200px",
              height: "70px",
              mr: "30px",
              mb: "20px",
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
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            spacing={3}
            justifyContent="space-between"
            mt={3}
            mb={5}
          >
            <Grid
              item
              xs={12} sm={4} md={4}
              textAlign="center"
            >
              <CurrencyExchangeIcon
                sx={{
                  fontSize: 50,
                  color: theme.lightGrey,
                  marginBottom: "8px",
                }}
              />
              <Typography fontSize="16px" color="white" variant="h6">
                Competitive Exchange Rates (42 Currencies)
              </Typography>
            </Grid>
            <Grid
              item
              xs={12} sm={4} md={4}
              textAlign="center"
            >
              <AccountBalanceWalletIcon
                sx={{
                  fontSize: 50,
                  color: theme.lightGrey,
                  marginBottom: "8px",
                }}
              />
              <Typography fontSize="16px" color="white" variant="h6">
                Secure Multi-Currency Wallet
              </Typography>
            </Grid>
            <Grid
              item
              xs={12} sm={4} md={4}
              textAlign="center"
            >
              <SavingsIcon
                sx={{
                  fontSize: 50,
                  color: theme.lightGrey,
                  marginBottom: "8px",
                }}
              />
              <Typography fontSize="16px" color="white" variant="h6">
                Earn 3.28% Interest
              </Typography>
              <Typography fontSize="10px" color="white" variant="h6">
                T&C applies*
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Content */}
        <Grid
          item
          xs={12} md={5} sm={12}
          textAlign="center"
          alignItems="flex-start"
        >
          <img
            src={iPhone}
            width="85%"
            alt="iPhone"
          />
        </Grid>
      </Grid>
    </Box>

  );
};

export default Hero;

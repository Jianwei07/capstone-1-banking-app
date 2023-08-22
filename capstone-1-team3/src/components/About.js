import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import forex from "../style/fx.png";
import { FaDesktop, FaHeart, FaCog } from "react-icons/fa";

const About = () => {
  return (
    <Grid background="#152840" style={{ padding: "128px 25px", height: "100vh" }} id="about">
      <Typography variant="h3" align="left" color="white" gutterBottom>
        Evolve your wallet efficiency with InnovPay competitive exchange rates
        and Interest API
      </Typography>
      <Typography variant="subtitle1" align="left" paragraph>
        Discover a new era of financial evolution with InnovPay. Our platform
        empowers your wallet product with 42 highly competitive exchange rates,
        facilitating seamless global transactions. Experience the security of
        our MultiCurrency Wallet, safeguarding your assets across currencies.
        Earn 3.28% interest, propelling your financial growth. Worry less, live
        more.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <img
            color="white"
            src={forex}
            width="100px"
            alt="Forex"
            style={{ marginRight: "8px" }}
          />
          <Typography color="#DFCD81" variant="h6" gutterBottom>
            Competitive Exchange Rates (42 Currencies)
          </Typography>
          <Typography variant="body1">
            Access 42 rates for global transactions, maximizing the value of
            your currencies.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FaHeart size={64} color="red" />
          <Typography color="#DFCD81" variant="h6" gutterBottom>
            Secure Multi-Currency Wallet
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FaDesktop size={64} color="green" />
          <Typography color="#DFCD81" variant="h6" gutterBottom>
            Earn 3.28% Interest
          </Typography>
          <Typography color="#DFCD81" variant="h10" gutterBottom>
            T&C applies*
          </Typography>
          <Typography variant="body1">
            Elevate your financial possibilities through a remarkable 3.28%
            interest rate, ushering in new avenues of prosperity.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FaCog size={64} color="orange" />
          <Typography color="#DFCD81" variant="h6" gutterBottom>
            AI-Driven Financial Insights
          </Typography>
          <Typography variant="body1">
            Harness personalized AI insights, gaining valuable perspectives that
            guide your financial decisions for optimal growth.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;

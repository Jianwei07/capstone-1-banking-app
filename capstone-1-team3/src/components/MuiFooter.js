import * as React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Box,
  Container,
  Typography,
  Link,
  ThemeProvider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InnovSlogan from "../style/InnovSlogan.png";
import theme from "./theme";

function Copyright() {
  return (
    <Typography fontSize={12} variant="body2" color="dirtyGold" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        InnovPay
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description } = props;

  return (
    <ThemeProvider theme={theme}>
      <Box component="footer" bgcolor="primary.main" sx={{ py: 6 }}>
        <Grid
          container
          columns={9}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          sx={{ justifyContent: "center" }}
          alignItems="flex-start"
        >
          <Grid
            item
            xs={3}
            md={3}
            sm={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={InnovSlogan} alt="InnovSlogan" width="500px" />
          </Grid>

          <Grid
            item
            xs={3}
            md={3}
            sm={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Container maxWidth="lg">
              <Typography
                fontSize={16}
                variant="body2"
                align="center"
                gutterBottom
              >
                <span style={{ color: "#F8F3A3" }}> Innov</span>Pay Technology
                Pte. Ltd. <br />
                10 Marina Blvd, <br />
                Marina Bay Financial <br />
                TowerSingapore 018983
              </Typography>
              <Typography
                fontSize={12}
                variant="subtitle1"
                align="center"
                color="light"
                component="p"
              >
                {description}
              </Typography>
              <Copyright />
            </Container>
          </Grid>

          <Grid
            item
            xs={3}
            md={3}
            sm={3}
            // paddingRight={30}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InstagramIcon sx={{ fontSize: 80, color: "dirtyGold" }} />
            <FacebookIcon sx={{ fontSize: 80, color: "dirtyGold" }} />
            <WhatsAppIcon sx={{ fontSize: 80, color: "dirtyGold" }} />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;

import * as React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InnovSlogan from "../style/InnovSlogan.png";
import { useTheme } from "../ThemeProvider";

function Copyright() {
  const theme = useTheme();
  return (
    <Typography fontSize={12} variant="body2" color={theme.lightGrey} align="center">
      {"Copyright © InnovPay "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const theme = useTheme();
  const { title, description } = props;

  return (
    <Box component="footer" bgcolor={theme.darkGrey} sx={{ py: 6 }}>
      <Grid
        container
        columns={9}
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid 
          item
          xs={9} md={3} sm={9}
          textAlign="center"
        > 
          <img src={InnovSlogan} alt="InnovSlogan" height="80px" />
        </Grid>

        <Grid
          item
          xs={6} md={3} sm={6}
          justifyContent="center"
        >
          <Typography
            fontSize={16}
            variant="body2"
            align="center"
            color={theme.lightGrey}
            gutterBottom
          >
            InnovPay Technology
            Pte. Ltd. <br />
            10 Marina Blvd, <br />
            Marina Bay Financial <br />
            TowerSingapore 018983
          </Typography>
          <Typography
            fontSize={12}
            variant="body2"
            align="center"
            color={theme.lightGrey}
            component="p"
          >
            {/* {title}{" "} */}
            {description}
          </Typography>
          <Copyright />
        </Grid>

        <Grid
          item
          xs={6} md={3} sm={6}
          textAlign="center"
        >
          <InstagramIcon sx={{ fontSize: 80, color: theme.dirtyGold }} />
          <FacebookIcon sx={{ fontSize: 80, color: theme.dirtyGold }} />
          <WhatsAppIcon sx={{ fontSize: 80, color: theme.dirtyGold }} />
        </Grid>
      </Grid>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Grid, Box, Toolbar, Link, Button } from "@mui/material";
import { useTheme } from "../ThemeProvider";
import HeadLogo from "../style/HeadLogo.png";

const Header = (props) => {
  const theme = useTheme();
  const { isLoggedIn, setIsLoggedIn } = props;
  const [scrollTarget, setScrollTarget] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (scrollTarget) {
      const targetElement = document.getElementById(scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ align:false, behavior: "smooth" });
      }
      setScrollTarget(null); // Clear the target so we don't keep trying to scroll on subsequent renders
    }
  }, [scrollTarget]);

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar
          sx={{ backgroundColor: theme.darkGrey }}
          px={4}
        >
          <Grid container alignItems="center">
            <Grid item xs={3} sm={4} md={4}>
              <Link
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  navigate("/capstone-1-banking-app");
                  setScrollTarget("top");
                }}
              >
                <img
                  src={HeadLogo}
                  alt="Logo"
                  height="40px"
                />
              </Link>
            </Grid>
            <Grid item
              sm={4} md={4}
              textAlign="center"
              sx={{ display: { xs: 'none', sm:'block'} }}
            >
              <Button
                onClick={() => {
                  navigate("/capstone-1-banking-app");
                  setScrollTarget("KeyFeatures");
                }}
                sx={{ color: theme.lightGold, fontWeight: "bold", margin: "0px 15px" }}
              >
                Key Features
              </Button>
              <Button
                onClick={() => {
                  navigate("/capstone-1-banking-app");
                  setScrollTarget("contact");
                }}
                sx={{ color: theme.tiffany, fontWeight: "bold", margin: "0px 15px" }}
              >
                Contact Us
              </Button>
            </Grid>
            {!isLoggedIn ? (
              <Grid item
                xs={9} sm={4} md={4}
                textAlign="right">
                <Button
                  color="inherit"
                  onClick={() => navigate("/login")}
                  variant="outlined"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    margin: "0 10px",
                  }}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate("/registration")}
                  variant="outlined"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    margin: "0 10px",
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            ) : (
              <Grid item xs={9} sm={4} md={4}
                textAlign="right">
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate("/");
                    setIsLoggedIn(false);
                    alert(
                      "Thank you for banking with us! You are now logged out."
                    );
                  }}
                  sx={{ color: "white", fontWeight: "bold", margin: "0 10px" }}
                >
                  Log Out
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>

    </React.Fragment>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import theme from "./theme";
import load2 from "../style/load2.png";

const Header = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;
  const [scrollTarget, setScrollTarget] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (scrollTarget) {
      const targetElement = document.getElementById(scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setScrollTarget(null); // Clear the target so we don't keep trying to scroll on subsequent renders
    }
  }, [scrollTarget]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <AppBar position="static" color="primary">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => {
                  navigate("/capstone-1-banking-app");
                  setScrollTarget("top");
                }}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <img
                  src={load2}
                  alt="Logo"
                  height="50px"
                  margin-top="5px"
                  style={{ marginTop: "5px" }}
                  onClick={() => navigate("/")}
                />
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/capstone-1-banking-app");
                  setScrollTarget("about");
                }}
                sx={{ color: "#F8F3A3", fontWeight: "bold", margin: "0 10px" }}
              >
                Key Features
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/capstone-1-banking-app");
                  setScrollTarget("contact");
                }}
                sx={{ color: "#C9EEF2", fontWeight: "bold", margin: "0 10px" }}
              >
                Contact Us
              </Button>
            </div>
            {!isLoggedIn ? (
              <div>
                <Button
                  color="inherit"
                  onClick={() => navigate("/login")}
                  variant="outlined"
                  sx={{
                    my: 1,
                    mx: 1.5,
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
                    my: 1,
                    mx: 1.5,
                    color: "white",
                    fontWeight: "bold",
                    margin: "0 10px",
                  }}
                >
                  Sign Up
                </Button>
              </div>
            ) : (
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/");
                  setIsLoggedIn(false);
                  alert(
                    "Thank you for banking with us! You are now logged out"
                  );
                }}
                sx={{ color: "white", fontWeight: "bold", margin: "0 10px" }}
              >
                Log Out
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Header;

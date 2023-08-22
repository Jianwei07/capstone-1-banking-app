import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import logo from "../style/favicon.ico";

const Header = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;
  const navigate = useNavigate();

  const handleScrollToComponent = (id) => {
    const componentRoot = document.getElementById(id);
    if (componentRoot) {
      componentRoot.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2D2D2D" }}>
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
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => {
              navigate("/capstone-1-banking-app");
              handleScrollToComponent("top");
            }}
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              width="50px"
              style={{ marginRight: "8px" }}
              id="top"
            />
            InnovPay
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
            onClick={() => handleScrollToComponent("about")}
            sx={{ color: "#F8F3A3", fontWeight: "bold", margin: "0 10px" }}
          >
            Key Features
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScrollToComponent("contact")}
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
              sx={{ color: "white", fontWeight: "bold", margin: "0 10px" }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate("/registration")}
              sx={{ color: "white", fontWeight: "bold", margin: "0 10px" }}
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
              alert("Thank you for banking with us! You are now logged out");
            }}
            sx={{ color: "white", fontWeight: "bold", margin: "0 10px" }}
          >
            Log Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

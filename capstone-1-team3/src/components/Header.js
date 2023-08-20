import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            style={{ cursor: "pointer", marginLeft: "10px" }}
            onClick={() => navigate("/capstone-1-banking-app")}
            sx={{
              background: "linear-gradient(to right bottom, C2A45F, #82ffa1)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            InnovPay
          </Typography>
        </div>
        <div>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate("/registration")}>
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

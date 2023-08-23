import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaPinterest,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "64px 0",
        textAlign: "center",
      }}
    >
      <Link
        style={{ cursor: "pointer", marginLeft: "10px" }}
        onClick={() => navigate("/")}
        variant="button"
        color="inherit"
        sx={{ textDecoration: "none", marginBottom: 2 }}
      >
        <i className="fa fa-arrow-up w3-margin-right"></i>Return to Menu
      </Link>
      <Box sx={{ fontSize: "2rem", marginBottom: 3 }}>
        <FaFacebook sx={{ marginRight: 3 }} />
        <FaInstagram sx={{ marginRight: 3 }} />
        <FaSnapchat sx={{ marginRight: 3 }} />
        <FaPinterest sx={{ marginRight: 3 }} />
        <FaTwitter sx={{ marginRight: 3 }} />
        <FaLinkedin />
      </Box>
      <Typography variant="body2">Copyright © 2023.</Typography>
    </Box>
  );
};

export default Footer;

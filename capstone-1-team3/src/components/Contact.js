import React from "react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";
import theme from "./theme";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <main
      id="contact"
      style={{
        backgroundColor: "#C2A45F",
        color: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        margin: 0,
        padding: 0,
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "0.5rem" }}>
        <h1
          style={{
            color: "black",
            fontSize: "2.5rem",
            lineHeight: "0.5",
            marginBottom: "0.5rem",
          }}
        >
          InnovPay: Where Security, Innovation,
          <p
            style={{
              color: "black",
              fontSize: "2.5rem",
              lineHeight: "0.5",
              marginBottom: "0.5rem",
            }}
          >
            and Prosperity Converge for You.
          </p>
        </h1>
      </div>
      <div style={{ marginBottom: "3rem" }}>
        <p style={{ color: "black", fontSize: "1.25rem", lineHeight: "1.2" }}>
          Step into the future of finance within a transparent community.
        </p>
        <p style={{ color: "black", fontSize: "1.25rem", lineHeight: "1.2" }}>
          Secure, diverse, and empowering solutions await your journey.
        </p>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="deepNavy"
            size="large"
            onClick={() => navigate("/registration")}
            sx={{
              // fontSize: '1.25rem',
              // padding: '20px 25px',
              borderRadius: "15px",
              backgroundColor: "deepNavy",
              color: "white",
              fontFamily: "Open Sans",
              fontWeight: "bold",
              width: "194px",
              height: "67px",
              margin: "0 0 10px 10px",
              "&:hover": {
                backgroundColor: "#deepNavy", // Keep the same background color on hover
              },
              "&:focus": {
                outline: "none", // Remove the default focus outline
              },
            }}
          >
            OPEN AN ACCOUNT
          </Button>

          <Button
            variant="contained"
            color="light"
            size="large"
            onClick={() => navigate("/Getintouch")}
            sx={{
              borderRadius: "15px",
              backgroundColor: "light",
              // color: "black",
              // fontFamily: "Open Sans",
              fontWeight: "bolder",
              margin: "0 0 10px 10px",
              // width: "194px",
              // height: "67px",

              // "&:hover": {
              //     backgroundColor: "white",
              // },
              // "&:focus": {
              //     outline: "none",
              // },
            }}
          >
            Get In Touch
          </Button>
        </ThemeProvider>
      </div>
    </main>
  );
}

export default Contact;

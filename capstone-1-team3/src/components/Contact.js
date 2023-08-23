import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

function Contact() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main
        id="contact"
        style={{
          backgroundColor: theme.palette.dirtyGold,
          color: "black",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: 0,
          padding: 0,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
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
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ color: "black", fontSize: "1.25rem", lineHeight: "1.2" }}>
            Step into the future of finance within a transparent community.
          </p>
          <p style={{ color: "black", fontSize: "1.25rem", lineHeight: "1.2" }}>
            Secure, diverse, and empowering solutions await your journey.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Button
            variant="contained"
            color="deepNavy"
            size="large"
            onClick={() => navigate("/registration")}
            sx={{
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.deepNavy,
              color: theme.palette.light,
              fontFamily: theme.typography.fontFamily,
              fontWeight: "bold",
              width: "194px",
              height: "67px",
              "&:hover": {
                backgroundColor: theme.palette.deepNavy,
              },
              "&:focus": {
                outline: "none",
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
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.light,
              fontWeight: "bolder",
              width: "194px",
              height: "67px",
            }}
          >
            Get In Touch
          </Button>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default Contact;

import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Paper, Box, Typography, Button, Avatar, FormControlLabel, TextField, Checkbox, Link, CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const defaultTheme = createTheme();

export default function SignInSide(props) {
  const navigate = useNavigate();
  const { profileList, handleSignInSuccess } = props;
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [isWrongLogin, setIsWrongLogin] = useState(false);

  const handleInput = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //find and return the profile for the input email
    const profileChecker = profileList[loginInput.email];
    if (profileChecker && profileChecker.password === loginInput.password) {
      //correct information
      setIsWrongLogin(false);
      handleSignInSuccess(loginInput.email);
      navigate("/profile");
    } else {
      //wrong information
      setIsWrongLogin(true);
      setLoginInput((prevInput) => ({ ...prevInput, password: "" }));
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ minHeight: "100vh" }}>
      <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleInput}
                value={loginInput.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInput}
                value={loginInput.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              {isWrongLogin ? (
                <Box color="red">
                  The email or password that you have entered is incorrect.
                </Box>
              ) : null}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => handleSubmit(e)}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} to="/registration" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

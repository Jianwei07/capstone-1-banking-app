import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import load2 from "../style/load2.png";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const { sections, title } = props;

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <img
              src={load2}
              alt="Logo"
              height="50px"
              margin-top="5px"
              style={{ marginTop: "5px" }}
              onClick={() => navigate("/")}
            />

          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button onClick={() => navigate("/login")} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            
            Login
          </Button>
          <Button onClick={() => navigate("/registration")} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;

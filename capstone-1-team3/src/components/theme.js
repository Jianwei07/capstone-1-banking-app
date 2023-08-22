import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {
    primary: {
      main: "#2D2D2D", // Grey from Header
    },
    gold: "#F8F3A3",
    deepNavy: "#152840",
    dirtyGold: "#DFCD81",
  },
  typography: {
    fontFamily: 'Open Sans'
  },
  
});

export default theme;

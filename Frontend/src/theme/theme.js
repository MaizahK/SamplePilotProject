import { createTheme } from "@mui/material/styles";

const primary = {
  main: "#35b2bc",
  light: "#6bcdd5",
  dark: "#27878f",
  contrastText: "#ffffff",
};

const secondary = {
  main: "#546e7a",
  light: "#8199a4",
  dark: "#3b4f55",
  contrastText: "#ffffff",
};

const theme = createTheme({
  palette: {
    mode: "light",

    primary,
    secondary,

    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },

    text: {
      primary: "#1a1a1a",
      secondary: "#555",
    },

    success: {
      main: "#4caf50",
      light: "#80e27e",
      dark: "#087f23",
      contrastText: "#ffffff",
    },

    warning: {
      main: "#ffa726",
      light: "#ffd95b",
      dark: "#c77800",
      contrastText: "#000000",
    },

    error: {
      main: "#e53935",
      light: "#ff6f60",
      dark: "#ab000d",
      contrastText: "#ffffff",
    },

    grey: {
      50:  "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    fontSize: 14,
  },

  shape: {
    borderRadius: 0,
  },
});

export default theme;

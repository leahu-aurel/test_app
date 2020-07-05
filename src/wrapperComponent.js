import React from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

export default () => {
  const nightMode = useSelector((state) => state.mode);
  const palletType = nightMode ? "dark" : "light";
  const mainPrimaryColor = nightMode ? orange[500] : lightBlue[500];
  const mainSecondaryColor = nightMode ? deepOrange[900] : deepPurple[500];
  const Theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
  );
};

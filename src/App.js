import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Compare from "./Components/Compare/Compare";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    h4: {
      fontSize: 20,
      fontWeight: 900,
    },
    h5: {
      fontSize: 16,
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
    },
    fontFamily: [
      "Sans",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Compare />
    </ThemeProvider>
  );
}

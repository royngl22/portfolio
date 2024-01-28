import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { lightScheme, darkScheme, emerald } from "./../util/ColorScheme";

export const Context = React.createContext();

export default function GlobalContext({ children }) {
  const [isDark, setIsDark] = useState(localStorage.getItem("dark") === "true");
  const [langCode, setLangCode] = useState(localStorage.getItem("lang"));

  const context = {
    theme: {
      isDark,
      setIsDark,
    },
    language: {
      langCode,
      setLangCode,
    },
  };

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      myColor: isDark ? darkScheme : lightScheme,
      emerald: emerald,
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  const globalStyle = {
    body: {
      background: isDark ? darkScheme.grayDefault : lightScheme.grayDefault,
    },
  };

  return (
    <Context.Provider value={context}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyle} />
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
}

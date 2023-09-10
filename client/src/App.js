import React from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { useStore } from "./ThemeStore";

function App() {
  const currentMode = useStore((s) => s.currentMode);
  const currentTheme = useStore((s) => s.currentTheme);

  const theme = {
    colors: currentMode,
    themeColors: currentTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

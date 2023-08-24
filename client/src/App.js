import "./App.css";
import Router from "./Router";
import {
  LIGHT_MODE,
  DARK_MODE,
  DIM_MODE,
  PURPLE,
  PINK,
  BLUE,
  YELLOW,
  ORANGE,
  GREEN,
} from "./styledComponents/theme";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

const themesMap = {
  LIGHT_MODE,
  DARK_MODE,
  DIM_MODE,
  PURPLE,
  PINK,
  BLUE,
  YELLOW,
  ORANGE,
  GREEN,
};

export const ThemePreferenceContext = React.createContext();

function App() {
  const [currentMode, setCurrentMode] = useState("DIM_MODE");
  const [currentTheme, setCurrentTheme] = useState("PURPLE");

  const theme = {
    colors: themesMap[currentMode],
    themeColors: themesMap[currentTheme],
  };

  return (
    <ThemePreferenceContext.Provider
      value={[
        { currentMode, setCurrentMode },
        { currentTheme, setCurrentTheme },
      ]}
    >
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;

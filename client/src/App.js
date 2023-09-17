import React, { useEffect, useState } from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { useStore } from "./ThemeStore";
import { useUserActions } from "./UserStore";
import { Spinnerr } from "./components/Tweets/TweetsStyle";
function App() {
  const { getMe } = useUserActions();
  const currentMode = useStore((s) => s.currentMode);
  const currentTheme = useStore((s) => s.currentTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMe()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [getMe]);

  const theme = {
    colors: currentMode,
    themeColors: currentTheme,
  };

  if (loading) {
    return (
      <div style={{ backgroundColor: theme.colors.bgPrimary, height: "100vh" }}>
        <Spinnerr size={80} thickness={4} />
      </div>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

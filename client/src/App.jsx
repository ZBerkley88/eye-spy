import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
};

export default App;

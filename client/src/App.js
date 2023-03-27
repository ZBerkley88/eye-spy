import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Layout from "scenes/Layout/Layout";
import Dashboard from "scenes/Dashboard/Dashboard";
import Cases from "scenes/Cases/Cases"

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Every route within this component will have the Layout component as
            the main parent. */}
            <Route element={<Layout />}>
              {/* If we go to the default homepage, we will be navigating the dashbaord route */}
              <Route path="/" element={<Navigate to="dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cases" element={<Cases />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

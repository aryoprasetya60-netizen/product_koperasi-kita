import React from "react";
import { CounterProvider } from "../context/CounterContext";
import { ThemeProvider } from "../context/ThemeContext";

function AppProviders({ children }: { children: React.ReactNode }) {
  return;
  <ThemeProvider>
    <CounterProvider>{children}</CounterProvider>;
  </ThemeProvider>;
}

export default AppProviders;

import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  useToggleWithCallback,
  useToggleWithoutCallback,
} from "./hooks/useToggle";
import AppProviders from "./providers/AppProviders";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeDisplay from "./components/molecules/ThemeDisplay";
import ThemeControl from "./components/molecules/ThemeControl";

function App() {
  // const isLoading = useLoading(5000);

  // Tanpa menggunakan callback
  const without = useToggleWithoutCallback();
  // Menggunakan callback
  const withCallback = useToggleWithCallback();

  // simpan reference
  const prevWithout = useRef(without.toggle);
  const prevWithCallback = useRef(withCallback.toggle);

  useEffect(() => {
    console.log(
      "toggle tanpa useCallback, referensinya sama",
      Object.is(prevWithout.current, without.toggle),
    );

    console.log(
      "toggle dengan useCallback, referensinya sama",
      Object.is(prevWithCallback.current, withCallback.toggle),
    );

    prevWithout.current = without.toggle;
    prevWithCallback.current = withCallback.toggle;
  });

  return (
    <div className="flex flex-col">
      <ThemeProvider>
        <div className="p-8 space-y-6">
          <ThemeDisplay />
          <ThemeControl />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

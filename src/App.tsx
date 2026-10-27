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
import { Provider } from "react-redux";
import CounterDisplay from "./components/molecules/CounterDisplay";
import { store } from "./store/store";
import CounterControl from "./components/molecules/CounterControl";
import TodoList from "./components/pages/TodoList";

function App() {
  return (
    <div className="flex flex-col">
      <Provider store={store}>
        <CounterDisplay />
        <CounterControl />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;

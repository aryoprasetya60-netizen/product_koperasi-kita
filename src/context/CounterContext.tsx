import React, { createContext, useContext, useReducer } from "react";

// bikin type state counter
export interface CounterState {
  count: number;
}

// bikin type action
export type CounterAction = { type: "INC" } | { type: "DEC" } | { type: "RESET" };

// bikin type atau interface untuk membuat context yang sesuai dengan yang kita mau
interface CounterContextValue {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
}

// bikin reducer
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

// 1. create context
const CounterContext = createContext<CounterContextValue | undefined>(undefined);

// 2. provider
export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
}

// 3. consume di child dengan useContext
export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounter must be used inside <CounterProvider>");
  return ctx;
}

// 4. dispatch -> ngetrigger action tertentu

// 5. reducer -> menulis actionnya

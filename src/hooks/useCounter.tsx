import { useState } from "react";

function useCounter(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);

  function increment() {
    setCount((prev) => prev + step);
  }

  function decrement() {
    setCount((prev) => prev - step);
  }

  function reset() {
    setCount(initial);
  }

  function set(value: number) {
    setCount(value);
  }

  return {
    count,
    increment,
    decrement,
    reset,
    set,
  };
}

export default useCounter;

import { useCallback, useState } from "react";

// Tanpa useCallback
export function useToggleWithoutCallback() {
  const [value, setValue] = useState(false);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return { value, toggle };
}

// Menggunakan useCallback
export function useToggleWithCallback() {
  const [value, setValue] = useState(false);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return { value, toggle };
}

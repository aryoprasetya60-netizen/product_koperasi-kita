import { useState } from "react";

function useArray<T>(initial: T[] = []) {
  const [items, setItems] = useState<T[]>(initial);

  function push(item: T) {
    setItems((prev) => [...prev, item]);
  }

  function remove(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function update(index: number, item: T) {
    setItems((prev) => prev.map((value, i) => (i === index ? item : value)));
  }

  function clear() {
    setItems([]);
  }

  function move(from: number, to: number) {
    setItems((prev) => {
      if (from < 0 || from >= prev.length || to < 0 || to >= prev.length) {
        return prev;
      }

      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);

      return next;
    });
  }

  return { items, push, remove, update, clear, move };
}

export default useArray;

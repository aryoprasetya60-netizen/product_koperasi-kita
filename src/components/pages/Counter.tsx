import { useState, useMemo, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  // useMemo: menghitung nilai berdasarkan counter
  const result = useMemo(() => {
    console.log("Menghitung hasil...");
    return counter * 2;
  }, [counter]);

  // useEffect: dijalankan ketika counter berubah
  useEffect(() => {
    console.log(`Counter sekarang: ${counter}`);
  }, [counter]);

  function increase() {
    setCounter((counter) => counter + 1);
  }

  function decrease() {
    if (counter <= 0) return;

    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div className="bg-red-950 text-4xl p-10 flex-col gap-4 rounded-md mx-auto mt-4">
      <div className="bg-lime-300 rounded-md text-center py-8 mb-4">
        <h1>{counter}</h1>
        <p className="text-xl mt-2">Hasil dikali 2: {result}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-amber-100 p-4 rounded-md" onClick={increase}>
          +
        </button>
        <button className="bg-amber-100 p-4 rounded-md" onClick={decrease}>
          -
        </button>
        <button
          className="bg-amber-100 p-4 rounded-md col-span-2"
          onClick={reset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Counter;

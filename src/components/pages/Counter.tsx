import { useMemo, useEffect, useState } from "react";
import useCounter from "../../hooks/useCounter";

function Counter() {
  const { count, increment, decrement, reset, set } = useCounter(0, 1);
  const [inputValue, setInputValue] = useState("");

  // useMemo: menghitung nilai berdasarkan counter
  const result = useMemo(() => {
    console.log("Menghitung hasil...");
    return count * 2;
  }, [count]);

  // useEffect: dijalankan ketika counter berubah
  useEffect(() => {
    console.log(`Counter sekarang: ${count}`);
  }, [count]);

  return (
    <div className="bg-red-950 text-4xl p-10 flex-col gap-4 rounded-md mx-auto mt-4">
      <div className="bg-lime-300 rounded-md text-center py-8 mb-4">
        <h1>{count}</h1>
        <p className="text-xl mt-2">Hasil dikali 2: {result}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-amber-100 p-4 rounded-md" onClick={increment}>
          +
        </button>

        <button className="bg-amber-100 p-4 rounded-md" onClick={decrement}>
          -
        </button>

        <button
          className="bg-amber-100 p-4 rounded-md col-span-2"
          onClick={reset}
        >
          RESET
        </button>
      </div>
      <div className="flex gap-2 my-3">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Masukkan angka"
          className="rounded border px-3 py-2 text-white"
        />

        <button
          onClick={() => {
            set(Number(inputValue));
          }}
          className="bg-amber-100 p-4 rounded-mde"
        >
          Set
        </button>
      </div>
    </div>
  );
}

export default Counter;

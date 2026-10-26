import { useCounter } from "../../context/CounterContext";

function CounterControl() {
  const { dispatch } = useCounter();

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-amber-100 p-4 rounded-md"
          onClick={() => dispatch({ type: "INC" })}
        >
          +
        </button>
        <button
          className="bg-amber-100 p-4 rounded-md"
          onClick={() => dispatch({ type: "DEC" })}
        >
          -
        </button>
        <button
          className="bg-amber-100 p-4 rounded-md col-span-2"
          onClick={() => dispatch({ type: "RESET" })}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default CounterControl;

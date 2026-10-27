import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { decrement, increment, reset } from "../../features/counterSlice";

function CounterControl() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-amber-100 p-4 rounded-md"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="bg-amber-100 p-4 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="bg-amber-100 p-4 rounded-md col-span-2"
          onClick={() => dispatch(reset())}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default CounterControl;

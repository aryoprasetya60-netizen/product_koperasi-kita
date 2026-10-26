import { useCounter } from "../../context/CounterContext";

function CounterDisplay() {
  const { state } = useCounter();
  return <div className="bg-red-900 text-amber-50">Count : {state.count}</div>;
}

export default CounterDisplay;

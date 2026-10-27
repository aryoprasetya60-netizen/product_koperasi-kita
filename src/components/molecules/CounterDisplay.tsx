import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

function CounterDisplay() {
  const count = useSelector((state: RootState) => state.counter.count);

  return <div className="bg-red-900 text-amber-50">Count : {count} </div>;
}

export default CounterDisplay;

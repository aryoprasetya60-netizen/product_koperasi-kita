import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      console.log(isRunning);
      return;
    }
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isRunning]);

  function reset() {
    setSeconds(0);
  }

  return (
    <div className="bg-red-950 text-4xl p-10 flex-col gap-4 rounded-md mx-auto mt-4">
      <div className="bg-lime-300 rounded-md text-center py-8 mb-4">
        <h1>{seconds}</h1>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-amber-100 p-4 rounded-md hover:bg-amber-300"
          onClick={() => setIsRunning(true)}
        >
          RESUME
        </button>
        <button
          className="bg-amber-100 p-4 rounded-md hover:bg-amber-300"
          onClick={() => setIsRunning(false)}
        >
          PAUSE
        </button>
        {!isRunning && (
          <button
            className="bg-amber-100 p-4 rounded-md col-span-2 hover:bg-amber-300"
            onClick={reset}
          >
            RESET
          </button>
        )}
      </div>
    </div>
  );
}

export default Timer;

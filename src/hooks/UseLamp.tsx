import { useState } from "react";

function UseLamp() {
  const [isOn, setIsOn] = useState(false);

  function changeLamp() {
    setIsOn((prev) => !prev);
  }

  return {
    isOn,
    changeLamp,
  };
}

export default UseLamp;

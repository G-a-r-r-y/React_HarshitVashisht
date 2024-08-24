import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    //setCount(count + 1);

    //Another way of writing with callback -
    // setCount((currentVal) => {
    //   return currentVal + 1;
    // });

    //Or
    setCount((currentVal) => currentVal + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <h1>This is counter Application</h1>
      <h2>{`Current Count - ${count}`}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Counter;

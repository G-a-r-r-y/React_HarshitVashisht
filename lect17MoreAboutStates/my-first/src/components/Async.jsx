import React, { useState } from "react";

function Async() {
  const [count, setCount] = useState(0);
  function handleClick() {
    console.log("Count's value - ", count);
    setCount(count + 1);
    console.log("Count's value - ", count);
  }
  return (
    <>
      <h1>Count - {count}</h1>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}

export default Async;

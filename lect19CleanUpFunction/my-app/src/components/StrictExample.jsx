import { useState, useEffect } from "react";

function StrictExample() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("UseEffect here");
    return () => {
      console.log("CleanUp here");
    };
  });
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter((preValue) => preValue + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}

export default StrictExample;

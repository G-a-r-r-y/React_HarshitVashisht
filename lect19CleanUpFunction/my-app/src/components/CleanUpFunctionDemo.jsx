import { useState, useEffect } from "react";

function CleanUpFunctionDemo() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("effect callback");
    //CleanUp function
    return function () {
      console.log("cleanup function");
    };
  }, [counter]);

  return (
    <>
      <h1>counter: {counter}</h1>
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

export default CleanUpFunctionDemo;

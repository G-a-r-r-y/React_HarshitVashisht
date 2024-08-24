import React from "react";
import { useEffect, useState } from "react";

function ExampleUseEffect() {
  console.log("Component renderd");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //   a.
  //     useEffect(() => {
  //       console.log("Inside UseEffect");
  //     });

  //   b.
  //     useEffect(() => {
  //       console.log("Inside UseEffect");
  //     }, []);

  //   c.
  useEffect(() => {
    console.log("Inside UseEffect");
  }, [counter1]);

  return (
    <>
      <div>
        <h1>Counter1 - {counter1}</h1>
        <button
          onClick={() => {
            setCounter1(counter1 + 1);
          }}
        >
          Increase
        </button>
      </div>

      <div>
        <h1>Counter2 - {counter2}</h1>
        <button
          onClick={() => {
            setCounter2(counter2 + 1);
          }}
        >
          Increase
        </button>
      </div>
    </>
  );
}

export default ExampleUseEffect;

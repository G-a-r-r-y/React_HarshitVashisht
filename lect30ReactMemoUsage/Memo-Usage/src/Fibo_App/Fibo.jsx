import { useState } from "react";

function Fibo() {
  const [num, setNum] = useState();

  function calculateFibo(num) {
    let x = 0;
    let y = 1;
    if (num === 1) {
      return 0;
    }
    if (num === 2) {
      return 1;
    }
    let z = 1;
    for (let i = 0; i < num - 2; i++) {
      z = x + y;
      x = y;
      y = z;
    }
    console.log(z);
    return z;
  }

  function handleClick(e) {
    e.preventDefault();
    setNum(e.target.value);
  }

  return (
    <>
      <label htmlFor="FiboNum">Enter Number - </label>
      <input
        type="text"
        name="FiboNum"
        id="FiboNum"
        defaultValue={num}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Enter Number
      </button>
    </>
  );
}

export default Fibo;

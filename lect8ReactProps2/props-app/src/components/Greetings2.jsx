import React from "react";

function Greetings2({ fName, lName, children }) {
  return (
    <>
      <h1>{`Hello ${fName} ${lName}`}</h1>
      <h2>{children}</h2>
    </>
  );
}

export default Greetings2;

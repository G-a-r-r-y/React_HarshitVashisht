import React from "react";
import { useRef } from "react";

function FormInputUsingUseRef() {
  console.log("Component rendered");
  const username = useRef("Harshit");
  const handleClick = () => {
    username.current = "Garvit";
    console.log(username);
  };

  return (
    <>
      <h1>{username.current}</h1>
      <button onClick={handleClick}>Change Name</button>
    </>
  );
}

export default FormInputUsingUseRef;

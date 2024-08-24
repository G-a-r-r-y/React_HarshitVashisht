import React from "react";
import { useRef } from "react";

function FormInputUsingUseRefEx2() {
  console.log("Component Rendered");
  const h1Ref = useRef();
  function handleClick() {
    const h1Element = h1Ref.current;
    h1Element.textContent = "Hi Garvit";
    h1Element.style.background = "blue";
  }

  return (
    <>
      <h1 ref={h1Ref}>Hello There</h1>
      <button onClick={handleClick}>Change Content</button>
    </>
  );
}

export default FormInputUsingUseRefEx2;

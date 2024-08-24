import React, { useEffect } from "react";
import { useRef } from "react";

function FocusOnInputOnMounting() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="username">Username: </label>
      <input ref={inputRef} type="text" name="username" id="username" />
    </>
  );
}

export default FocusOnInputOnMounting;

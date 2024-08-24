import React from "react";
import { useRef } from "react";

function FormInputUsingUseRefEx3() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <>
      <form action="">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" ref={usernameRef} />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default FormInputUsingUseRefEx3;

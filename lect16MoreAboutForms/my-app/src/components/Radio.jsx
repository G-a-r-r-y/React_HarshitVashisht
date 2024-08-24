import React from "react";
import { useState } from "react";

function Radio() {
  const [gender, setGender] = useState("male");

  return (
    <>
      <h1>Radio Buttons </h1>

      <label htmlFor="male">Male</label>
      <input
        type="radio"
        checked={gender === "male"}
        onChange={() => {
          setGender("male");
        }}
      />

      <br />
      <label htmlFor="female">female</label>
      <input
        type="radio"
        checked={gender === "female"}
        onChange={() => {
          setGender("female");
        }}
      />
    </>
  );
}

export default Radio;

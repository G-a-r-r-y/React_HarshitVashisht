import React from "react";
import { useState } from "react";

function UserForm() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  return (
    <>
      <label htmlFor="fName">Firstname: </label>
      <input
        type="text"
        id="fName"
        name="fName"
        value={fName}
        onChange={(e) => {
          setfName(e.target.value);
        }}
      />

      <br />
      <br />
      <label htmlFor="lName">Lastname: </label>
      <input
        type="text"
        id="lName"
        name="lName"
        value={lName}
        onChange={(e) => {
          setlName(e.target.value);
        }}
      />

      <br />
      <br />
      <p>FirstName - {fName}</p>
      <p>LastName - {lName}</p>
      <p>Full Name - {`${fName}${lName}`}</p>
    </>
  );
}

export default UserForm;

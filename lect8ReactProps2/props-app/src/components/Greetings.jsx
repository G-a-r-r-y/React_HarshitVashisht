import React from "react";

function Greetings({ firstName, lastName = "Manral" }) {
  return (
    <>
      <h1>Greetings {`${firstName} ${lastName}`} </h1>
    </>
  );
}

export default Greetings;

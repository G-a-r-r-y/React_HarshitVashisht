import React from "react";

function PrintList({ id, Name, Age }) {
  return (
    <div>
      <h1>Name: {Name}</h1>
      <p>Age: {Age}</p>
    </div>
  );
}

export default PrintList;

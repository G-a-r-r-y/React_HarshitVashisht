import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function UpdatingArray() {
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  function addFruits() {
    setFruits(["Orange"]);
  }

  return (
    <>
      <h1>Updating an array here using useState Hook</h1>
      <h2>Given Array - </h2>

      <ul>
        {fruits.map((fruit) => {
          console.log(fruit);
          <li key={uuid()}>{fruit}</li>;
        })}
      </ul>

      <button onClick={addFruits}>Add Fruit</button>
    </>
  );
}

export default UpdatingArray;

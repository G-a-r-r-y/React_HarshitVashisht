import React from "react";
import PrintList from "./PrintList";
import { v4 as uuid } from "uuid";

function KeysWarning() {
  const list = [
    { id: 1, Name: "Garvit", Age: 12 },
    { id: 2, Name: "Akshat", Age: 1 },
    { id: 3, Name: "Boondi", Age: 33 },
    { id: 4, Name: "Raita", Age: 12 },
  ];

  function randomNumber() {}
  return (
    <>
      {list.map((item) => {
        return <PrintList {...item} key={uuid()} />;
      })}
    </>
  );
}

export default KeysWarning;

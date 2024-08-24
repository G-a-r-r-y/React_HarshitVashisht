import React from "react";
import "./common.css";
import { useContext } from "react";
import { MyAppContext } from "../App";

function Child() {
  const obj = useContext(MyAppContext);
  const func1 = obj.myFunc;
  const func2 = obj.myFunc2;
  return (
    <div className="Child">
      <h1>Child</h1>
      <br />
      <button onClick={func1}>Call Function1</button>
      <button onClick={func2}>Call Function2</button>
    </div>
  );
}

export default Child;

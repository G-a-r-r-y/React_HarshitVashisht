import React from "react";
import "./common.css";
import Child from "./Child";

function Parent() {
  return (
    <div className="Parent">
      <h1>Parent</h1>
      <Child />
    </div>
  );
}

export default Parent;

import React from "react";

function RenderingAnArray(props) {
  console.log(props);
  return <>{<h1>{`${props.fName} ${props.lName}`}</h1>}</>;
}

export default RenderingAnArray;

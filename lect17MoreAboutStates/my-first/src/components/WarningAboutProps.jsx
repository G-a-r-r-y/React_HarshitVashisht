import React from "react";

function WarningAboutProps(props) {
  let { count } = props;
  count = 1000;
  return <h1>Count - {count}</h1>;
}

export default WarningAboutProps;

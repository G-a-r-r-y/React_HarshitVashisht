import React from "react";
import ReactDOM from "react-dom/client";
import LocalStorageApp from "./LocalStorageApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <FetchApp /> */}
    <LocalStorageApp />
  </React.StrictMode>
);

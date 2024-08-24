import React from "react";

function User({ id, name }) {
  return (
    <>
      <div>
        <h1>{id}</h1>
        <h2>{name}</h2>
      </div>
    </>
  );
}

export default User;

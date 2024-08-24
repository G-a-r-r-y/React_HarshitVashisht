import React from "react";
import "./Todo.css";

function Todo({ id, title, completed, dispatch }) {
  function handleClick() {
    dispatch({ type: "REMOVE_TODO", payload: { id: id } });
  }

  function handleToggle() {
    dispatch({ type: "TOGGLE_TODO", payload: { id: id } });
  }

  return (
    <div className="TodoElement">
      <h1>id: {id}</h1>
      <h2
        style={{
          textDecoration: completed ? "line-through" : "solid",
        }}
      >
        title: {title}
      </h2>
      <input type="checkbox" checked={completed} onClick={handleToggle} />
      <button onClick={handleClick}>Remove Item</button>
    </div>
  );
}

export default Todo;

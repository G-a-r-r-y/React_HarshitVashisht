import React from "react";
import "./CommonCss.css";
import { ImCross } from "react-icons/im";

function Todo({ title, id, completed, toggleCompleted, removeTodo }) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          onChange={() => {
            toggleCompleted(id);
          }}
          checked={completed}
        ></input>
        <h1 className={`${completed ? "completed" : ""}`}>{title}</h1>
      </div>

      <div className="cross-btn" onClick={() => removeTodo(id)}>
        <ImCross />
      </div>
    </div>
  );
}

export default Todo;

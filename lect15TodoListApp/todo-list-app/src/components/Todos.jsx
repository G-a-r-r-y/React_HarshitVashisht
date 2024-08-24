import React from "react";
import Todo from "./Todo";
import "./CommonCss.css";

function Todos({ todos, toggleCompleted, removeTodo }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        );
      })}
    </>
  );
}

export default Todos;

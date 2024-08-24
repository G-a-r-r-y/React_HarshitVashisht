import React from "react";
import Todo from "./Todo";

function Todos({ todos, dispatch }) {
  return (
    <>
      {todos.map((todo) => {
        return <Todo {...todo} key={todo.id} dispatch={dispatch} />;
      })}
    </>
  );
}

export default Todos;

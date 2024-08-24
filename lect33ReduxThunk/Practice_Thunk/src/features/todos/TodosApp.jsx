import React from "react";
import TodosForm from "./TodosForm";
import TodosList from "./TodosList";

function TodosApp() {
  return (
    <>
      <h1>Todos App</h1>
      <TodosForm />
      <TodosList />
    </>
  );
}

export default TodosApp;

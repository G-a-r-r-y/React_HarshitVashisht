import React from "react";
import { useState } from "react";

function AddTodosForm({ dispatch }) {
  const [title, setNewTitle] = useState("");

  function clickHandler(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("type someting......");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      completed: false,
      title: title,
    };
    dispatch({ type: "ADD_TODO", payload: { newTodo: newTodo } });
    setNewTitle("");
  }

  return (
    <>
      <label htmlFor="newTodo"></label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      <button onClick={clickHandler}>Add Todo</button>
    </>
  );
}

export default AddTodosForm;

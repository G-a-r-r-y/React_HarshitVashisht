import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./CommonCss.css";
import { toast } from "react-toastify";

function TodoForm({ addTodo }) {
  const [inputText, setInputText] = useState("");

  function inputHandler(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (inputText.trim().length === 0) {
      toast.error("Please fill input", {
        autoClose: 2000,
      });
      return;
    }

    const newTodo = {
      id: uuid(),
      title: inputText,
      completed: false,
    };
    addTodo(newTodo);
    setInputText("");
  }

  return (
    <>
      <form onSubmit={submitHandler} className="todoForm">
        <input
          type="text"
          onChange={inputHandler}
          value={inputText}
          className="todoForm_input"
        />
        <button type="submit" className="todoForm_btn">
          Add Todo
        </button>
      </form>
    </>
  );
}

export default TodoForm;

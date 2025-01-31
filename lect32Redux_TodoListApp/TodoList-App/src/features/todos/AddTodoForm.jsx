import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

function AddTodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // const newTodo = {
    //   id: nanoid(),
    //   title: title,
    //   completed: false,
    // };
    // dispatch(addTodo(newTodo));

    dispatch(addTodo(title));
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;

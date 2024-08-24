import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function TodosForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    dispatch(addTodo(title))
      .then(() => {
        setTitle("");
      })
      .unwrap()
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
      {error && <p style={{ color: "red" }}></p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "adding...." : "add"}
      </button>
    </form>
  );
}

export default TodosForm;

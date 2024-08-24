import { useEffect, useState } from "react";
import { fetchTodos } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

function TodosList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data: todos } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchTodos())
      .unwrap()
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      {todos.map((todo) => {
        return <SingleTodo {...todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodosList;

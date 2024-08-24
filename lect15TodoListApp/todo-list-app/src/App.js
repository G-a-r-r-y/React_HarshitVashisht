import TodoForm from "./components/TodoForm";
import { useState } from "react";
import Todos from "./components/Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn Maths", completed: false },
    { id: 3, title: "Learn Cooking", completed: true },
    { id: 4, title: "Learn Playing", completed: false },
  ]);

  function addTodo(newTodo) {
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  }

  function toggleCompleted(id) {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }

  function removeTodo(id) {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== id;
      });
    });
  }

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;

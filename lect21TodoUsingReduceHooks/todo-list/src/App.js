import { useReducer } from "react";
import AddTodosForm from "./components/AddTodosForm";
import Todos from "./components/Todos";

function reducer(todos, action) {
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload.newTodo];
  }

  if (action.type === "REMOVE_TODO") {
    return todos.filter((todo) => {
      return todo.id !== action.payload.id;
    });
  }

  if (action.type === "TOGGLE_TODO") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
  return todos;
}

const initialTodos = [
  { id: 1, title: "Item1", completed: true },
  { id: 2, title: "Item2", completed: false },
  { id: 3, title: "Item3", completed: true },
  { id: 4, title: "Item4", completed: false },
];
function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <>
      <AddTodosForm dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />
    </>
  );
}

export default App;

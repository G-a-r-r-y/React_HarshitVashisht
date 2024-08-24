import { useState } from "react";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, Name: "Garvit", age: 21 },
    { id: 2, Name: "Abhinav", age: 32 },
    { id: 3, Name: "Ananya", age: 11 },
    { id: 4, Name: "Ramu", age: 244 },
  ]);

  function increaseAge(id) {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }

  function deleteEle(id) {
    setUsers((prevState) => {
      return prevState.filter((user) => {
        return user.id !== id;
      });
    });
  }

  return (
    <>
      <Users users={users} increaseAge={increaseAge} deleteEle={deleteEle} />
    </>
  );
}

export default App;

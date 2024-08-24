import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("Harshit");
  function handleNameChange() {
    setFirstName("John");
  }

  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={handleNameChange}>Change Name</button>
    </>
  );
}

export default App;

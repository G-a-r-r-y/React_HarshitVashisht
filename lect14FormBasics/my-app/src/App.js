import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(e) {
    console.log(e.target.value);
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Hello ${username} with password ${password}`);
  }

  function handlePassword(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  return (
    <div className="App">
      <h1>Form Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />

        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

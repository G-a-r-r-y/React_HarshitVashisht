import { useState } from "react";
import ExtraComponent from "./ExtraComponent";

function InputForm() {
  const [username, setUsername] = useState("");
  console.log("input form rendered");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        autoComplete="off"
      />
      <ExtraComponent username={username} />
      <button onClick={() => setUsername("")}>Clear Input</button>
    </form>
  );
}
export default InputForm;

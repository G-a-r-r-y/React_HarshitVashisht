import Parent from "./Components/Parent";
import "./Components/common.css";
import { createContext } from "react";

export const MyAppContext = createContext();

function App() {
  function myFunc() {
    console.log("Say Hello");
  }
  function myFunc2() {
    console.log("Say Hello2");
  }

  return (
    <>
      <MyAppContext.Provider value={{ myFunc: myFunc, myFunc2: myFunc2 }}>
        <div className="grandParent">
          <h1>Grand Parent</h1>
          <Parent />
        </div>
      </MyAppContext.Provider>
    </>
  );
}

export default App;

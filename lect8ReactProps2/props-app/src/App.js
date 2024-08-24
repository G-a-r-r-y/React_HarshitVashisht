// import Greetings from "./components/Greetings";
// import Greetings2 from "./components/Greetings2";

import RenderingAnArray from "./components/RenderingAnArray";

const users = [
  { id: 1, fName: "Garvit", lName: "Manral" },
  { id: 2, fName: "Akshat", lName: "Jain" },
  { id: 3, fName: "Abhinav", lName: "Mittal" },
];

function App() {
  return (
    <>
      {/* For default Props -  */}
      {/* <Greetings firstName="Garvit" />
      <Greetings firstName="Aryan" lastName="Jaiswal" /> */}

      {/* For Children Props -  */}
      {/* <Greetings2 fName="Garvit" lName="Manral">
        <h1>This is children Props</h1>
      </Greetings2> */}

      {/* For Rendering an array -  */}
      {/* {users.map((user) => {
        return <RenderingAnArray fName={user.fName} lName={user.lName} />;
      })} */}
      {/* Note - Poora function {} ke ander likha  jaayega */}

      {/* OR */}
      {/* We can pass the whole object */}
      {users.map((user) => {
        return <RenderingAnArray {...user} key={user.id} />;
      })}
    </>
  );
}

export default App;

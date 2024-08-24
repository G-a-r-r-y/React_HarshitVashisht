import Greetings from "./components/Greetings";

const list = ["list1Object", "list2Object"];
const object = { key1: "value1", key2: "value2" };

function App() {
  return (
    <>
      <Greetings
        firstName="Garvit"
        lastName="Manral"
        age={21}
        list={list}
        object={object}
      />
    </>
  );
}

export default App;

function App() {
  function handleClick(e) {
    console.log(e);
    console.log("You clicked me");
    console.log(e.target);
    e.target.textContent = "You Clicked me";
  }

  //Wrapper Concept -
  function handleClick2(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
  }

  //Wrapper Function  -
  function wrapperFunction() {
    handleClick2("Garvit", "Manral");
  }

  return (
    <>
      <h1>App</h1>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />

      {/* For wrapper concept - */}
      <button onClick={wrapperFunction}>Click Me 2</button>
      <br />
      <br />

      {/* Another Way to write wrapper functions -  */}
      <button
        onClick={(e) => {
          e.target.textContent = "You clicked me bastard!!!";
          handleClick2("abhinav", "Mittal");
        }}
      >
        Click Me 3
      </button>
    </>
  );
}

export default App;

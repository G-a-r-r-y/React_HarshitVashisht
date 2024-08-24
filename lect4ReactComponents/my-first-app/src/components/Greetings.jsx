import React from "react";
import "./Greetings.css";

function Greetings() {
  const Firstname = "garvit"; //This is jx
  const upperCasefunc = (name) => name.toUpperCase();
  return (
    //This is jsx
    <div className="bg-dark">
      <h1>
        Hello From Greetings, {Firstname},{upperCasefunc("Garvit2")}
      </h1>
      {/* using string templates(js inside jsx) */}
      <h1>{`${Firstname} how are you`}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        debitis corrupti voluptatum tempore doloribus provident amet molestias
        minima unde voluptatibus, soluta sequi impedit.
      </p>
      <form action="">
        <label htmlFor="">FirstName</label>
        <input type="text" id="fname" />
      </form>
    </div>
  );
}

export default Greetings;

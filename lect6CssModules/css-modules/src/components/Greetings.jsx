import React from "react";
import style1 from "./Greeting1.module.css";
import style2 from "./Greeting2.module.css";

function Greetings() {
  return (
    <div className={style2.GreetingClass}>
      <h1>Hellow World</h1>
      <p>
        Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatum, facilis. Consectetur facilis fuga accusamus consequatur
        possimus cupiditate sapiente quasi, quia architecto minus id!
      </p>
    </div>
  );
}

export default Greetings;

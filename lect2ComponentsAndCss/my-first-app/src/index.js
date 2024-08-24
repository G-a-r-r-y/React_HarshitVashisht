import React from 'react';
import ReactDOM from 'react-dom/client';


//One way - 
// function Hello(){
//   return <h1>Hello World</h1> 
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<Hello/>);

//Another way - 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hello World</h1>
  </React.StrictMode>
)
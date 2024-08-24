import "./Greeting.css";

// 1.Simple Way
// function Greeting() {
//   return (
//     <div className="bg-dark">
//       <h1>Hello World</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima
//         perspiciatis rem doloribus? Fugiat exercitationem fuga deserunt id. Illo
//         fugit dolorum repellat consequuntur?
//       </p>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------------------

// 2. Using a user created css object inside the function only
// function Greeting() {
//   const cssObj = {
//     backgroundColor: "lightblue",
//     fontFamily: "sans-serif",
//     margin: "1rem",
//     padding: "1rem",
//   };

//   return (
//     <div style={cssObj}>
//       <h1>Hello World</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima
//         perspiciatis rem doloribus? Fugiat exercitationem fuga deserunt id. Illo
//         fugit dolorum repellat consequuntur?
//       </p>
//     </div>
//   );
// }

// OR

// function Greeting() {
//   return (
//     <div
//       //Note - we used double {} with style
//       style={{
//         backgroundColor: "lightblue",
//         fontFamily: "sans-serif",
//         margin: "1rem",
//         padding: "1rem",
//       }}
//     >
//       <h1>Hello World</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima
//         perspiciatis rem doloribus? Fugiat exercitationem fuga deserunt id. Illo
//         fugit dolorum repellat consequuntur?
//       </p>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------------------
// 3. Using tertiary operator with classes

// function Greeting() {
//   const isDark = false;
//   return (
//     <div className={isDark ? "bg-dark" : ""}>
//       <h1>Hello World</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima
//         perspiciatis rem doloribus? Fugiat exercitationem fuga deserunt id. Illo
//         fugit dolorum repellat consequuntur?
//       </p>
//     </div>
//   );
// }

// OR

// function Greeting() {
//   const isDark = true;
//   return (
//     <div className={isDark && "bg-dark"}>
//       <h1>Hello World</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima
//         perspiciatis rem doloribus? Fugiat exercitationem fuga deserunt id. Illo
//         fugit dolorum repellat consequuntur?
//       </p>
//     </div>
//   );
// }

// ---------------------------------------------------------------------------------
// 4. Using tertiary operator with multiple classes

function Greeting() {
  const isDark = true;
  return (
    <div className={`container ${isDark ? "bg-dark" : ""}`}>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima
        perspiciatis rem doloribus? Fugiat exercitationem fuga deserunt id. Illo
        fugit dolorum repellat consequuntur?
      </p>
    </div>
  );
}

export default Greeting;

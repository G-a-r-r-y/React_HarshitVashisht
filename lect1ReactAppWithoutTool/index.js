const rootElement = document.getElementById("root");


//1.
// //Syntax  - React.createElement(type,properties,children)
// const el = React.createElement("h1",null,"Hello World");

// //Adding the element 
// ReactDOM.createRoot(rootElement).render(el);


//2. Another Way using functions - 
// function HelloWorld(){
//     return React.createElement("h1",{className:"heading"},"Hello World")
// }
// ReactDOM.createRoot(rootElement).render(HelloWorld());

// Note - 1. Functions name should always start with a Capital letter because of react rules. 
//        2. We use className instead of class cause class word is reserved.


//3. Another way using JSX syntax  - 
function HelloWorld(){
    return <h1 class="heading">Hello World</h1>
}

// ReactDOM.createRoot(rootElement).render(HelloWorld());
//We can also do 
ReactDOM.createRoot(rootElement).render(<HelloWorld/>);
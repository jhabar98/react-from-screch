const heading = React.createElement("h1", { id:"heading"}, "Hello Word From React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
 const parent = React.createElement("div", { id:"parent"},[
    React.createElement("div",{ id:"child"},[
        React.createElement("h1", {}, "i am h1 "),
        React.createElement("div", {}, "i am h2"),
    ]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "i am h1 "),
        React.createElement("div", {}, "i am h2"),
    ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// function add(b, c,a) {
//     return a, b *c;
//   }
  
//   // Example usage:
//    result = add(3, 5);
//   console.log(result); // Output: 8
  
// for(var i=0; i<4; i++){
//     setTimeout(() => console.log(i), 1000);
//     }
   
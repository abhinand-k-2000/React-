/*

<div id="parent">
    <div id="child">
        <h1>Hello</h1>
        <h2>React</h1>
    </div>
</div>

*/

const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement(
    "div",
    { id: "child1" },[
    React.createElement("h1", {}, "Hello"),
    React.createElement("p", {}, "This is from react")
    ]
  ),
  React.createElement("div", {id: "child2"}, [
    React.createElement("h2", {}, "React core")
  ])
]
);

// const heading = React.createElement("h1", {id: "heading"}, "This is the inception");
console.log("parent", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

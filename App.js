const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "i'm an H1 tag."), React.createElement("h2",{}, "I'm h2 tag")]
  ), React.createElement("div", {id:"child2"}, React.createElement("h1", {}, "heloo"))]
);

const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => import('Components/test/HelloWorld');

function render() {
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
  );
}

render();
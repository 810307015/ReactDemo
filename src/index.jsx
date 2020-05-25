import React from "react";
import ReactDOM from "react-dom";

// const HelloWorld = () => React.lazy(() => import('Components/test/HelloWorld'));
import HelloWorld from 'Components/test/HelloWorld';

function render() {
  console.log(111);
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
  );
}

render();
import React from "react";
import ReactDOM from "react-dom";

import { AsyncComponent } from 'Utils/component';

const HelloWorld = AsyncComponent(() => import('Components/test/HelloWorld'));

let index = 0;

function render() {
  if(index === 12) {
    ReactDOM.render(
      <div>结束</div>,
      document.getElementById("root")
    );
  } else {
    ReactDOM.render(
      <HelloWorld msg={`你好，世界！${index}`} />,
      document.getElementById("root")
    );
  }
}

render();

const timer = setInterval(() => {
  if(index > 10) {
    clearInterval(timer);
  }
  ++index;
  render();
}, 1000);
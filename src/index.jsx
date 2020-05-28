import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

const HelloWorld = lazy(() => import('Components/test/HelloWorld'));
// import HelloWorld from 'Components/test/HelloWorld';

function render() {
  ReactDOM.render(
    <Suspense
      fallback={<div>loading...</div>}
    >
      <HelloWorld />
    </Suspense>,
    document.getElementById("root")
  );
}

render();
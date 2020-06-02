import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import { renderRoutes } from 'Utils/component';
import routes from 'Routes';

const browserHistory = createBrowserHistory();

function render() {
  ReactDOM.render(
    <Router history={browserHistory}>
      {
        renderRoutes(routes)
      }
    </Router>,
    document.getElementById("root")
  );
}

render();
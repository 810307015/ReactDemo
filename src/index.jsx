import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import { renderRoutes } from 'Utils/component';
import routes from 'Routes';
import store from 'Store';

console.log(store.getState())

const browserHistory = createBrowserHistory();

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {
          renderRoutes(routes)
        }
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}

render();
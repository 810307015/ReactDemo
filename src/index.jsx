import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import * as services from 'Services';
import { renderRoutes, ServiceProvider } from 'Utils/component';
import routes from 'Routes';
import store from 'Store';

const browserHistory = createBrowserHistory();

function render() {
  ReactDOM.render(
    <ServiceProvider services={services}>
      <Provider store={store}>
        <Router history={browserHistory}>
          {
            renderRoutes(routes)
          }
        </Router>
      </Provider>
    </ServiceProvider>
    ,
    document.getElementById("root")
  );
}

render();
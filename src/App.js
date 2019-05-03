import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <h1 style={{ textAlign: 'center', padding: '1em' }}>
              UNDER CONSTRUCTION
              <span role="img" aria-label="confounded-face" style={{ marginLeft: '5px' }}>
                👷‍🚧
              </span>
            </h1>
          )}
        />
        <Route
          path="*"
          component={() => (
            <h1 style={{ textAlign: 'center', padding: '1em' }}>
              404: Page Not Found
              <span role="img" aria-label="confounded-face" style={{ marginLeft: '5px' }}>
                😖
              </span>
            </h1>
          )}
        />
      </Switch>
    </BrowserRouter>
  </div>
);

export default hot(module)(App);

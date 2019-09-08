import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Home" component={App} />
        <Route exact path="/todo" component={App} />
        {/* <Route path="/icons" component={Icons} />
        <Route path="/forms" component={Forms} />
        <Route path="/other" component={Other} />
        <Route strict path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </Router>
  );
}

export default Routes;

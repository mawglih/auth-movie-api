import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import Auth from 'components/Auth';

export const AUTH = '/auth';
export const HOME = '/';

export const Routes = () => (
  <Switch>
    <Route
      exact
      path={HOME}
      component={Home}
    />
    <Route
      exact
      path={AUTH}
      component={Auth}
    />
    <Route
      component={Home}
    />
  </Switch>
);

export default {};

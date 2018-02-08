import React from 'react';
import {Switch} from 'react-router-dom';
import asyncComponent from './components/AsyncComponent/AsyncComponent';
import AppliedRoute from './components/Route/AppliedRoute';
import UnauthenticatedRoute from './components/Route/UnauthenticatedRoute';

const AsyncHome = asyncComponent(() => import('./containers/Home'));
const AsyncAbout = asyncComponent(() => import('./containers/About'));
const AsyncLogin = asyncComponent(() => import('./containers/Login'));

export default ({childProps}) => (
  <Switch>
    <AppliedRoute path="/" exact component={AsyncHome} props={childProps} />
    <AppliedRoute
      path="/Login"
      exact
      component={AsyncLogin}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/about-us"
      exact
      component={AsyncAbout}
      props={childProps}
    />
    {/*{ /* Finally, catch all unmatched routes */}*/}
  </Switch>
);

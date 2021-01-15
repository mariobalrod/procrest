import React from 'react';
import useConnect from './connect';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateComponent';

import Landing from '../Views/Landing';
import About from '../Views/About';
import Apartments from '../Views/Apartments';
import Cities from '../Views/Cities';
import Categories from '../Views/About';

import Profile from '../Views/Profile';

const Root = () => {
  const { isLoading, isAuth } = useConnect();

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Cities} exact path="/cities" />
        <Route component={About} exact path="/about" />
        <Route component={Categories} exact path="/categories" />
        <Route component={Apartments} exact path="/apartments" />

        <PrivateRoute
          component={Profile}
          path="/profile"
          isAuthenticated={isAuth}
        />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default Root

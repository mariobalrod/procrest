import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Landing from '../Views/Landing';
import About from '../Views/About';
import Apartments from '../Views/Apartments';
import Cities from '../Views/Cities';
import Categories from '../Views/About';

import Profile from '../Views/Profile';

import useConnect from './connect';

const Root = () => {
  const { isLoading } = useConnect();

  if (isLoading) return <>Loading...</>

  return (
    <>
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Cities} exact path="/cities" />
        <Route component={About} exact path="/about" />
        <Route component={Categories} exact path="/categories" />
        <Route component={Apartments} exact path="/apartments" />
        <Route component={Profile} exact path="/profile" />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default Root

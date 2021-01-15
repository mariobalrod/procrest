import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  if (!props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
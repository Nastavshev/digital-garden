import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <Route {...rest}>
      {
        isAuthenticated
          ? children
          : <Redirect to="/login" />
      }
    </Route>
  );
}

export default PrivateRoute;

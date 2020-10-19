import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../components/Modal/ModalLogin';
import Main from './Main';

function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <Route {...rest}>
      {
        isAuthenticated
          ? children
          : <Redirect to="/" />
      }
    </Route>
  );
}

export default PrivateRoute;

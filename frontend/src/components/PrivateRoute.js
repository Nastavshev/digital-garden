import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/Modal/ModalLogin';
import Main from './Main';
import { modalLogin } from './../redux/modalLoginActions'

function PrivateRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <Route {...rest}>
      {
        isAuthenticated
          ? children
          : (dispatch(modalLogin()) && < Redirect to="/" />)
      }
    </Route>
  );
}

export default PrivateRoute;

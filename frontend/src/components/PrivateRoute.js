import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Modal/ModalLogin';
import Main from './Main';
import { modalLogin } from '../redux/modalLoginActions';
import { setSession } from '../redux/sessionActions';

function PrivateRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(async () => {
    try {
      const response = await fetch('/auth/isSession');
      const resp = await response.json();
      dispatch(setSession(resp));
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Route {...rest}>
      {
        isAuthenticated
          ? children
          : (dispatch(modalLogin()) && <Redirect to="/" />)
      }
    </Route>
  );
}

export default PrivateRoute;

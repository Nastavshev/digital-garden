import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { modalLogin } from '../../redux/modalLoginActions';
import { setSession } from '../../redux/sessionActions';
import logger from '../../misc/logger';

function PrivateRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch('/auth/isSession');
        const resp = await response.json();
        dispatch(setSession(resp));
      })();
    } catch (err) {
      logger.error(err);
    }
  }, [dispatch]);

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
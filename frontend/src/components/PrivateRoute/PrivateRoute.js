import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { modalLogin } from '../../redux/modalLoginActions';
import { setSession, setErrorSession } from '../../redux/sessionActions';

function PrivateRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated.status);
  const errorMessage = useSelector((state) => state.isAuthenticated.error);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/auth/isSession');
        const resp = await response.json();
        dispatch(setSession(resp));
      } catch (err) {
        return dispatch(setErrorSession(err));
      }
    })();
  }, [dispatch]);

  return (
    <Route {...rest}>
      {errorMessage}
      { !errorMessage && (isAuthenticated
        ? children
        : (dispatch(modalLogin()) && <Redirect to="/" />)
      )}
    </Route>
  );
}

export default PrivateRoute;

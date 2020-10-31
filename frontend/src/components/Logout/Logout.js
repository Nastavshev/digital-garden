import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setLogout } from '../../redux/authActions';
import { setDeleteSession, setErrorSession } from '../../redux/sessionActions';

function Logout() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.user.error);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        await fetch('/auth/logout');
        history.push('/');
      } catch (err) {
        return dispatch(setErrorSession(err));
      }
      dispatch(setLogout());
      dispatch(setDeleteSession());
    })();
  }, []);
  return (
    <>
      {errorMessage}
    </>
  );
}

export default Logout;

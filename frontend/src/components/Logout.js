import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setLogout } from '../redux/authActions';

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      console.log('logout');
      await fetch('/auth/logout');
      dispatch(setLogout());
      history.push('/');
    })();
  }, []);
  return (
    <>
    <div>logout</div>
    </>
  );
}

export default Logout;

import { ADD_SESSION, DELETE_SESSION, ERROR_SESSION } from './actionTypes';

const setSession = (session) => ({
  type: ADD_SESSION,
  payload: session,
});

const setDeleteSession = () => ({
  type: DELETE_SESSION,
});

const setErrorSession = (err) => ({
  type: ERROR_SESSION,
  payload: err,
});

export { setSession, setDeleteSession, setErrorSession };

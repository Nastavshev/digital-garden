import { ADD_SESSION, DELETE_SESSION } from './actionTypes';

const setSession = (session) => ({
  type: ADD_SESSION,
  payload: session,
});

const setDeleteSession = () => ({
  type: DELETE_SESSION,
});

export { setSession, setDeleteSession };

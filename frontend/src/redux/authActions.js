import {
  AUTHENTICATED_SUCCESSULLY, LOGOUT, LOGUP, AUTHENTICATED_UNSUCCESSULLY, AUTHENTICATION_ERROR,
} from './actionTypes';

const setLogin = () => ({
  type: AUTHENTICATED_SUCCESSULLY,
});

const setLogup = () => ({
  type: LOGUP,
});

const setLogout = () => ({
  type: LOGOUT,
});

const setFault = () => ({
  type: AUTHENTICATED_UNSUCCESSULLY,
});

const setAuthError = (error) => ({
  type: AUTHENTICATION_ERROR,
  payload: error,
});

export {
  setLogin, setLogup, setLogout, setFault, setAuthError,
};

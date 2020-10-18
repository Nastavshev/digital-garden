import {
  AUTHENTICATED_SUCCESSULLY, LOGOUT, LOGUP, AUTHENTICATED_UNSUCCESSULLY,
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

export {
  setLogin, setLogup, setLogout, setFault,
};

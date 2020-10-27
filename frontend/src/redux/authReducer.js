import {
  AUTHENTICATED_SUCCESSULLY, LOGOUT, LOGUP, AUTHENTICATED_UNSUCCESSULLY,
} from './actionTypes';

function authorization(state = false, action) {
  switch (action.type) {
    case AUTHENTICATED_SUCCESSULLY:
      return true;
    case LOGUP:
      return true;
    case LOGOUT:
      return false;
    case AUTHENTICATED_UNSUCCESSULLY:
      return false;
    default:
      return state;
  }
}

export default authorization;

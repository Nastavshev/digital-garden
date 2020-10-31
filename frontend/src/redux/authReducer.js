import {
  AUTHENTICATED_SUCCESSULLY, LOGOUT, LOGUP, AUTHENTICATED_UNSUCCESSULLY, AUTHENTICATION_ERROR,
} from './actionTypes';

const initialAuth = {
  status: false,
  error: '',
};

function authorization(state = initialAuth, action) {
  switch (action.type) {
    case AUTHENTICATED_SUCCESSULLY:
      return {
        ...state,
        status: true,
      };
    case LOGUP:
      return {
        ...state,
        status: true,
      };
    case LOGOUT:
      return {
        ...state,
        status: false,
      };
    case AUTHENTICATED_UNSUCCESSULLY:
      return {
        ...state,
        status: false,
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
}

export default authorization;

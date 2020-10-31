import { ADD_SESSION, DELETE_SESSION, ERROR_SESSION } from './actionTypes';

function isSession(state = {}, action) {
  switch (action.type) {
    case ADD_SESSION:
      return action.payload;
    case DELETE_SESSION:
      return {};
    case ERROR_SESSION:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
}

export default isSession;

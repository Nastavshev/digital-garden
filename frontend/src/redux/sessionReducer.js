import { ADD_SESSION, DELETE_SESSION } from './actionTypes';

function isSession(state = {}, action) {
  switch (action.type) {
    case ADD_SESSION:
      return action.payload;
    case DELETE_SESSION:
      return {};
    default:
      return state;
  }
}

export default isSession;

import { SUPPORT } from './actionTypes';

function isSupport(state = false, action) {
  switch (action.type) {
    case SUPPORT:
      return action.payload;
    default:
      return state;
  }
}

export default isSupport;

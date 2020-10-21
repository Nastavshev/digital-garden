import { USER_CHAT } from './actionTypes';

function isChat(state = '', action) {
  switch (action.type) {
    case USER_CHAT:
      return action.payload;
    default:
      return state;
  }
}

export default isChat;

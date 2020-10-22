import { USER_CHAT } from './actionTypes';

const setUserChat = (id) => ({
  type: USER_CHAT,
  payload: id,
});

export default setUserChat;

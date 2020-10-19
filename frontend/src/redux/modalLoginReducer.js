import { MODAL_LOGIN } from '../redux/actionTypes';

const modalLoginReducer = (state = false, action) => {
  switch (action.type) {
    case MODAL_LOGIN:
      return !state;
    default:
      return state;
  }
}

export default modalLoginReducer;

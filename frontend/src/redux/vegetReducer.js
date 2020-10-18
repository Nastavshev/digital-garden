import { GET_VEGETABLES_DB } from '../redux/actionTypes';

function vegetReducer(state = [], action) {
  switch (action.type) {
    case GET_VEGETABLES_DB:
      return [
        ...action.payload
      ]
    default:
      return state;
  }
}

export default vegetReducer;
import { CREATE_GARDEN } from './actionTypes';

const createGardenReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_GARDEN:
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
}

export default createGardenReducer;

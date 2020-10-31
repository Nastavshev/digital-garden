import { GET_MOONCALENDAR_DB } from './actionTypes';

function moonReducer(state = {}, action) {
  switch (action.type) {
    case GET_MOONCALENDAR_DB:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
}

export default moonReducer;

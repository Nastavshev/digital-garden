import { PAGE_THEME } from './actionTypes.js';

const initialState = {pageNumber : '1'}
function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'PAGE_THEME':
      return {
        pageNumber: action.payload
      };
    default:
      return state;
  }
}

export default pageReducer;
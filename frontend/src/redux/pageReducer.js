import { PAGE_THEME, PAGE_DEFAULT } from './actionTypes.js';

const initialState = { pageNumber: '1' }
function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'PAGE_THEME':
      return {
        pageNumber: action.payload
      };
    case 'PAGE_DEFAULT':
      return {
        pageNumber: 1
      };
    default:
      return state;
  }
}

export default pageReducer;
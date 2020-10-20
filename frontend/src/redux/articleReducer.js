import { GET_ARTICLE_DB, UPDATE_COMMENTS_ARRAY} from '../redux/actionTypes';

function articleReducer(state = [], action) {
  switch (action.type) {
    case GET_ARTICLE_DB:
      return [
        ...action.payload
      ]
      case UPDATE_COMMENTS_ARRAY:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
}

export default articleReducer;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authorization from './authReducer';
import vegetReducer from './vegetReducer';
import moonReducer from './moonReducer';
import articleReducer from './articleReducer';
import modalLoginReducer from './modalLoginReducer';
import pageReducer from './pageReducer';
import thunkMiddleware from 'redux-thunk';

const preloadedState = window.localStorage.getItem('state') || '{}';

const store = createStore(
  combineReducers({
    isAuthenticated: authorization,
    vegetables: vegetReducer,
    mooncalendar: moonReducer,
    articles: articleReducer,
    modalLogin: modalLoginReducer,
    pageNumber: pageReducer,
  }),
  JSON.parse(preloadedState),
  // {
  //   isAuthenticated: false,
  // },
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
    ),
  ),
);

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});

export default store;

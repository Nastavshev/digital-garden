import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import authorization from './authReducer';
import vegetReducer from './vegetReducer';
import moonReducer from './moonReducer';
import articleReducer from './articleReducer';
import modalLoginReducer from './modalLoginReducer';
import pageReducer from './pageReducer';
import isSession from './sessionReducer';


const preloadedState = window.localStorage.getItem('state') || '{}';

const store = createStore(
  combineReducers({
    isAuthenticated: authorization,
    vegetables: vegetReducer,
    mooncalendar: moonReducer,
    articles: articleReducer,
    modalLogin: modalLoginReducer,
    pageNumber: pageReducer,
    user: isSession,
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

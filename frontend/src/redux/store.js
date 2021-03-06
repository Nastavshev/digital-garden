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
import createGardenReducer from './createGardenReducer';
import reducerGardenBed from './reducerGardenBed';
import isChat from './chatReducer';
import isSupport from './supportReducer';

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
    garden: createGardenReducer,
    gardenBed: reducerGardenBed,
    currentChat: isChat,
    supportChat: isSupport,
  }),
  JSON.parse(preloadedState),
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

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authorization from './authReducer';
import vegetReducer from './vegetReducer';
import moonReducer from './moonReducer';
import thunkMiddleware from 'redux-thunk';

const preloadedState = window.localStorage.getItem('state') || '{}';

const store = createStore(
  combineReducers({
    isAuthenticated: authorization,
    vegetables: vegetReducer,
    mooncalendar: moonReducer,
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

import {applyMiddleware, compose, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

import {rootReducer} from './reducers';

const storage = compose(
  filter(['authentication.authentication.jwt', 'authentication.authentication.isLoggedIn'])
)(adapter(
  window.localStorage
));

const enhancer = compose(
  applyMiddleware(
    reduxThunk,
    createLogger()
  ),
  persistState(storage, 'redux')
);

const reducer = compose(
  mergePersistedState()
)(rootReducer());

export const store = createStore(
  reducer,
  enhancer
);

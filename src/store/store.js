import {applyMiddleware, compose, createStore} from 'redux';
import persistState, {mergePersistedState} from 'redux-localstorage';
import filter from 'redux-localstorage-filter';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import {createLogger} from 'redux-logger';
import reduxThunk from 'redux-thunk';

import {rootReducer} from './reducers';

const storage = compose(
  filter(['authentication.jwt'])
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

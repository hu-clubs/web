import {compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import persistState from 'redux-localstorage';

import {rootReducer} from './reducers';

const loggerMiddleware = createLogger();

const enhancer = compose(
  thunkMiddleware,
  loggerMiddleware,
  persistState('authentication')
);

export const store = createStore(
  rootReducer(),
  enhancer
);

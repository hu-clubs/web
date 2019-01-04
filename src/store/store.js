import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistedReducer} from './persistance/persistedReducer';
import {apiMiddleware} from 'redux-api-middleware';

const enhancer = applyMiddleware(
  thunk,
  apiMiddleware,
  logger
);

export const store = createStore(
  persistedReducer,
  enhancer
);

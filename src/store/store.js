import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createFilter } from 'redux-persist-transform-filter';
import {rootReducer} from './reducers';

const authenticationFilter = createFilter('authentication', ['jwt']);

const persistConfig = {
  key: 'root',
  whitelist: ['authentication'],
  storage,
  transforms: [authenticationFilter]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = compose(
  applyMiddleware(
    reduxThunk,
    logger
  )
);

export const store = createStore(
  persistedReducer,
  enhancer
);

export const persistor = persistStore(store)

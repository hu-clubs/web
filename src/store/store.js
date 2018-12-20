import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createFilter} from 'redux-persist-transform-filter';
import storage from 'redux-persist/es/storage';
import {persistStore, persistReducer} from 'redux-persist';
import {rootReducer} from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const jwtFilter = createFilter('authentication', ['jwt'], ['jwt']);

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [
    'authentication'
  ],
  transforms: [
    jwtFilter
  ]
};

const enhancer = applyMiddleware(
  thunk,
  logger
);

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  enhancer
);

export const persistor = persistStore(store);

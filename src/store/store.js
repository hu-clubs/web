import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk';
import {rootReducer} from './reducers';


const enhancer = compose(
  applyMiddleware(
    reduxThunk,
    logger
  )
);

const reducer = rootReducer();

export const store = createStore(
  reducer,
  enhancer
);

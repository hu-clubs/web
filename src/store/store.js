import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import {rootReducer} from './reducers';
import {login} from './authentication/actions';

export const store = createStore(
  rootReducer(),
  applyMiddleware(reduxThunk, createLogger())
);

store.dispatch(login('jshepherd@harding.edu', 'mypassword'));

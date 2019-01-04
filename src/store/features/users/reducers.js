import {combineReducers} from 'redux';
import createUserReducer from './create/reducers';
import userDetailsReducer from './read/reducers';

export const usersReducer = combineReducers({
  create: createUserReducer,
  read: userDetailsReducer
});

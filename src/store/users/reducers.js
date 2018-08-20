import {combineReducers} from 'redux';
import createUserReducer from './create/reducers';
import userDetailsReducer from './read/reducers';

export default combineReducers({
  create: createUserReducer,
  read: userDetailsReducer
});

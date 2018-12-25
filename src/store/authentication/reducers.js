import {combineReducers} from 'redux';
import userReducer from './user/reducers';
import loginReducer from './login/reducers';

export const authenticationReducer = combineReducers({
  login: loginReducer,
  user: userReducer
});

import {combineReducers} from 'redux';
import {authenticationReducer} from './authentication/reducers';
import {clubReducer} from './club/reducers';
import {userReducer} from './user/reducers';

export function rootReducer (state = {}, action) {
  return combineReducers({
    clubs: clubReducer,
    authentication: authenticationReducer,
    users: userReducer
  });
}

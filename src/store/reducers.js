import { combineReducers } from 'redux';
import { clubReducer } from './club/reducers';
import { authenticationReducer } from './authentication/reducers';
import { userReducer } from './user/reducers';

export function rootReducer (state = {}, action) {
  return combineReducers({
    clubs: clubReducer,
    authentication: authenticationReducer,
    users: userReducer
  });
}

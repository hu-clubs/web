import { combineReducers } from 'redux';
import { clubReducer } from './club/reducers';
import { authenticationReducer } from './authentication/reducers';

export function rootReducer (state = {}, action) {
  return combineReducers({
    clubs: clubReducer,
    authentication: authenticationReducer
  });
}

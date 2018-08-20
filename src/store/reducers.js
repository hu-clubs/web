import {combineReducers} from 'redux';
import {authenticationReducer} from './authentication/reducers';
import clubsReducer from './clubs/reducers';
import usersReducer from './users/reducers';

export function rootReducer (state = {}, action) {
  return combineReducers({
    authentication: authenticationReducer,
    clubs: clubsReducer,
    users: usersReducer
  });
}

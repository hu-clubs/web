import {combineReducers} from 'redux';
import {authenticationReducer} from './authentication/reducers';
import {clubsReducer} from './clubs/reducers';
import {usersReducer} from './users/reducers';
import {interfaceReducer} from './interface/reducers';

export const rootReducer = combineReducers({
  authentication: authenticationReducer,
  clubs: clubsReducer,
  users: usersReducer,
  interface: interfaceReducer
});

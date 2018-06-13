import {LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT} from './actions';
import {combineReducers} from 'redux';

const initialState = {
  isFetching: false,
  jwt: '',
  isLoggedIn: false
};

export function loginReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        isFetching: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jwt: action.jwt,
        isLoggedIn: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case LOGOUT:
      return {
        ...state,
        jwt: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
}

export const authenticationReducer = combineReducers({
  authentication: loginReducer
});

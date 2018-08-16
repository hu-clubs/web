import {combineReducers} from 'redux';
import {LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS, SET_JWT} from './actions';

const initialJwtState = {
  jwt: '',
  firstName: '',
  lastName: '',
  email: '',
  id: '',
  isLoggedIn: false
};

const initialLoginState = {
  isFetching: false,
  error: null
};

export function jwtReducer (state = initialJwtState, action) {
  switch (action.type) {
    case SET_JWT:
      if (action.jwt) {
        return {
          ...state,
          jwt: action.jwt,
          firstName: action.firstName,
          lastName: action.lastName,
          email: action.email,
          id: action.id,
          isLoggedIn: true
        };
      } else {
        return initialJwtState;
      }
    default:
      return state;
  }
}

export function loginReducer (state = initialLoginState, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        isFetching: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const authenticationReducer = combineReducers({
  login: loginReducer,
  jwt: jwtReducer
});

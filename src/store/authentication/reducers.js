import {LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS} from './actions';
import {combineReducers} from 'redux';

const initialState = {
  isFetching: '',
  jwt: ''
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
        jwt: action.jwt
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
  authentication: loginReducer
});

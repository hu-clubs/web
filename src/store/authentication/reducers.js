import {SET_JWT} from './actions';

const initialState = {
  jwt: ''
};

export function authenticationReducer (state = initialState, action) {
  switch (action.type) {
    case SET_JWT:
      return {
        ...state,
        jwt: action.jwt
      };
    default:
      return state;
  }
}

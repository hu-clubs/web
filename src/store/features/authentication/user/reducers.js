import {REMOVE_JWT, SET_JWT} from './actions';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: {
    jwt: null,
    decoded: null
  }
};

export default function jwtReducer (state = initialState, action) {
  switch (action.type) {
    case SET_JWT:
      let decodedJwt = jwtDecode(action.jwt);
      return {
        ...state,
        token: {
          jwt: action.jwt,
          decoded: decodedJwt
        }
      };
    case REMOVE_JWT:
      return initialState;
    default:
      return state;
  }
}

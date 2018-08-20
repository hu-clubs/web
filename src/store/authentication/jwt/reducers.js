import {REMOVE_JWT, SET_JWT} from './actions';

const initialState = {
  token: null,
  decoded: null
};

export default function jwtReducer (state = initialState, action) {
  switch (action.type) {
    case SET_JWT:
      return {
        ...state,
        token: action.token,
        decoded: action.decoded
      };
    case REMOVE_JWT:
      return initialState;
    default:
      return state;
  }
}

import {SET_JWT} from './actions';

// TODO implement reducer composition
const initialState = {
  authentication: {
    jwt: ''
  }
};

// TODO implement reducer composition
export function authentication (state, action) {
  if (state === undefined) {
    return initialState;
  } else if (state.authentication === undefined) {
    return {
      ...state,
      initialState
    };
  }

  switch (action.type) {
    case SET_JWT:
      return {
        ...state,
        authentication: {
          jwt: action.jwt
        }
      };
    default:
      return state;
  }
}

import {isRSAA} from 'redux-api-middleware';

export const jwtMiddleware = ({getState}) => next => action => {
  if (isRSAA(action)) {
    const jwt = getState().authentication.user.token.jwt;
    if (jwt) {
      const actionWithJwt = {
        ...action,
        headers: {
          ...action.headers,
          'Authorization': 'Bearer ' + jwt
        }
      };
      return next(actionWithJwt);
    }
  }
  return next(action);
};

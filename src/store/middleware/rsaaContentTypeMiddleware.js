import {isRSAA} from 'redux-api-middleware';

export const contentTypeMiddleware = store => next => action => {
  if (isRSAA(action)) {
    const actionWithContentType = {
      ...action,
      headers: {
        ...action.headers,
        'Content-Type': 'application/json'
      }
    };
    return next(actionWithContentType);
  }
  return next(action);
};

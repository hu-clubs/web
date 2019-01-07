import {isRSAA} from 'redux-api-middleware';

const API_URL = process.env.REACT_APP_API_URL;

export const endpointMiddleware = store => next => action => {
  if (isRSAA(action)) {
    const actionWithFullEndpoint = {
      ...action,
      endpoint: API_URL + action.endpoint
    };
    return next(actionWithFullEndpoint);
  }
  return next(action);
};

import {RSAA} from 'redux-api-middleware';
import {API_URL} from '../api/utilities';

export function createRequestReducers () {
  return {
    begin: () => {
      return {
        isRequesting: true,
        error: false
      };
    },
    success: (action) => {
      return {
        isRequesting: false,
        error: false
      };
    },
    error: (action) => {
      return {
        isRequesting: false,
        error: action.payload
      };
    }
  };
}

export function createActions (action) {
  return {
    begin: 'FETCH_' + action + '_BEGIN',
    success: 'FETCH_' + action + '_SUCCESS',
    error: 'FETCH_' + action + '_ERROR',
    invalidate: 'INVALIDATE_' + action,
    fetchActions: [this.begin, this.success, this.error]
  };
}

export function createRSAA (endpoint, jwt, options) {
  let obj = {
    [RSAA]: {
      ...options,
      endpoint: API_URL + endpoint
    }
  };

  if (jwt) {
    obj.headers = {
      ...obj.headers,
      Authorization: 'Bearer ' + jwt
    };
  }

  return obj;
}

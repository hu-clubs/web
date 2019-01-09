import {RSAA} from 'redux-api-middleware';
import {actionTypesToRsaaArray, createRsaaActionTypes} from '../../utils/crud/actions';

export const loginActionTypes = createRsaaActionTypes('LOGIN', 'USER');
export const REMOVE_JWT = 'REMOVE_JWT';

export function login (email, password) {
  return {
    [RSAA]: {
      endpoint: '/api/users/authentication/login',
      method: 'POST',
      body: {
        email,
        password
      },
      types: actionTypesToRsaaArray(loginActionTypes)
    }
  };
}

export function removeJwt () {
  return {
    type: REMOVE_JWT
  };
}

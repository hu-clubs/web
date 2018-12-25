export const SET_JWT = 'SET_JWT';
export const REMOVE_JWT = 'REMOVE_JWT';

export function setJwt (jwt) {
  return {
    type: SET_JWT,
    jwt: jwt
  };
}

export function removeJwt () {
  return {
    type: REMOVE_JWT
  };
}

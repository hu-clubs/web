export const SET_JWT = 'SET_JWT';

export function setJwt (jwt) {
  return {
    type: SET_JWT,
    jwt: jwt
  };
}

export function getJwt (getState) {
  return getState().authentication.user.token.jwt;
}

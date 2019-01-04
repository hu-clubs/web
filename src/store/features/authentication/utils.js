export function getJwt (state) {
  return state.authentication.user.token.jwt;
}

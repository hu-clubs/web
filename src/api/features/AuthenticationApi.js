import {postApi} from '../utilities';

const AUTHENTICATION_URL = '/api/users/authentication';

export async function login (email, password) {
  return postApi(AUTHENTICATION_URL + '/login', {
    body: {
      email,
      password
    }
  });
}

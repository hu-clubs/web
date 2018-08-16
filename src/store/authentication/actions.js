import * as api from '../../api/rest';

export const SET_JWT = 'SET_JWT';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function setJwt (jwt) {
  // TODO decode jwt
  if (jwt) {
    return {
      type: SET_JWT,
      jwt: jwt,
      firstName: 'Jerred',
      lastName: 'Shepherd',
      email: 'jshepherd@harding.edu',
      id: '5b6f065218d2c0218e27f0ad'
    };
  } else {
    return {
      type: SET_JWT,
      jwt: null
    };
  }
}

export function login (email, password) {
  return function (dispatch) {
    (async function () {
      dispatch(loginBegin());
      try {
        let json = await api.login(email, password);
        dispatch(loginSuccess());
        dispatch(setJwt(json.token));
      } catch (err) {
        dispatch(loginError(err));
      }
    })();
  };
}

export function loginBegin () {
  return {
    type: LOGIN_BEGIN
  };
}

export function loginSuccess () {
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginError (json) {
  return {
    type: LOGIN_ERROR,
    error: json
  };
}

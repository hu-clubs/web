import * as api from '../../api/rest';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER_BEGIN = 'REGISTER_BEGIN';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGOUT = 'LOGOUT';

export function logout () {
  return {
    type: LOGOUT
  };
}

export function login (email, password) {
  return function (dispatch) {
    (async function () {
      dispatch(loginBegin());
      try {
        let jwt = await api.login(email, password);
        dispatch(loginSuccess(jwt));
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

export function loginSuccess (json) {
  return {
    type: LOGIN_SUCCESS,
    jwt: json.token
  };
}

export function loginError (json) {
  return {
    type: LOGIN_ERROR,
    error: json
  };
}

export function register (email, password) {
  return function (dispatch) {
    (async function () {
      dispatch(registerBegin());
      try {
        let jwt = api.login(email, password);
        dispatch(registerSuccess(jwt));
      } catch (err) {
        dispatch(registerError(err));
      }
    })();
  };
}

export function registerBegin () {
  return {
    type: REGISTER_BEGIN
  };
}

export function registerSuccess (json) {
  return {
    type: REGISTER_SUCCESS,
    jwt: json.token
  };
}

export function registerError (json) {
  return {
    type: REGISTER_ERROR,
    error: json
  };
}

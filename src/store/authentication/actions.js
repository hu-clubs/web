import fetch from 'cross-fetch';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
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
        let res = await fetch('http://localhost:8080/api/authentication/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        });
        let json = await res.json();
        if (!res.ok) {
          dispatch(loginError({
            title: res.status + ' ' + res.statusText,
            message: json.error.name + (json.error.message ? ': ' + json.error.message : '')
          }));
        } else {
          dispatch(loginSuccess(json));
        }
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

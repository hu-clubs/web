import fetch from 'cross-fetch';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login (email, password) {
  return function (dispatch) {
    dispatch(loginBegin());
    return fetch('http://localhost:8080/api/authentication/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res);
        }
        return res;
      })
      .then(res => res.json())
      .then(json => {
        dispatch(loginSuccess(json));
      })
      .catch(err => {
        dispatch(loginError(err));
      });
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

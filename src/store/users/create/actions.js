import * as api from '../../../api/rest';
import {setJwt} from '../../authentication/jwt/actions';

export const REQUEST_CREATE_USER_BEGIN = 'REQUEST_CREATE_USER_BEGIN';
export const REQUEST_CREATE_USER_SUCCESS = 'REQUEST_CREATE_USER_SUCCESS';
export const REQUEST_CREATE_USER_ERROR = 'REQUEST_CREATE_USER_ERROR';

export function requestCreateUser (firstName, lastName, email, hNumber, password, register) {
  return function (dispatch, getState) {
    let jwt = register ? null : getState().authentication.jwt.token;
    (async function () {
      dispatch(createUserBegin());
      try {
        let json = await api.user.requestCreateUser(jwt, firstName, lastName, email, hNumber, password, register);
        dispatch(createUserSuccess());
        if (register) {
          dispatch(setJwt(json.token));
        }
      } catch (err) {
        dispatch(createUserError(err));
      }
    })();
  };
}

export function createUserBegin () {
  return {
    type: REQUEST_CREATE_USER_BEGIN
  };
}

export function createUserSuccess () {
  return {
    type: REQUEST_CREATE_USER_SUCCESS
  };
}

export function createUserError (error) {
  return {
    type: REQUEST_CREATE_USER_ERROR,
    error
  };
}

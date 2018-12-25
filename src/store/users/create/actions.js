import {setJwt} from '../../authentication/user/actions';
import {userApi} from '../../../api';
import {getJwt} from '../../authentication/utils';

export const REQUEST_CREATE_USER_BEGIN = 'REQUEST_CREATE_USER_BEGIN';
export const REQUEST_CREATE_USER_SUCCESS = 'REQUEST_CREATE_USER_SUCCESS';
export const REQUEST_CREATE_USER_ERROR = 'REQUEST_CREATE_USER_ERROR';

export function requestCreateUser (firstName, lastName, email, hNumber, password, register) {
  return function (dispatch, getState) {
    let jwt = register ? null : getJwt(getState);
    (async function () {
      dispatch(createUserBegin());
      try {
        let json = await userApi.create(jwt, {
          firstName,
          lastName,
          email,
          hNumber,
          password,
          register
        });
        dispatch(createUserSuccess());
        if (register) {
          dispatch(setJwt(json.jwt));
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

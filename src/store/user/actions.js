import * as api from '../../api/rest';
import {setJwt} from '../authentication/actions';

export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const CREATE_USER_BEGIN = 'CREATE_USER_BEGIN';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export const INVALIDATE_USER = 'INVALIDATE_USER';

export function createUser (firstName, lastName, email, hNumber, password, register) {
  return function (dispatch) {
    (async function () {
      dispatch(createUserBegin());
      try {
        let json = await api.createUser(firstName, lastName, email, hNumber, password, register);
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
    type: CREATE_USER_BEGIN
  };
}

export function createUserSuccess () {
  return {
    type: CREATE_USER_SUCCESS
  };
}

export function createUserError (json) {
  return {
    type: CREATE_USER_ERROR,
    error: json
  };
}

export function fetchUser (userId) {
  return function (dispatch, getState) {
    (async function () {
      dispatch(fetchUserBegin(userId));
      try {
        let user = await api.getUser(getState().authentication.jwt.jwt, userId);
        dispatch(fetchUserSuccess(userId, user));
      } catch (err) {
        dispatch(fetchUserError(userId, err));
      }
    })();
  };
}

export function fetchUserBegin (userId) {
  return {
    type: FETCH_USER_BEGIN,
    userId: userId
  };
}

export function fetchUserSuccess (userId, json) {
  return {
    type: FETCH_USER_SUCCESS,
    userId: userId,
    user: json,
    receivedAt: Date.now()
  };
}

export function fetchUserError (userId, json) {
  return {
    type: FETCH_USER_ERROR,
    userId: userId,
    error: json
  };
}

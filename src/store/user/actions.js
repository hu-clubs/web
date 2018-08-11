import * as api from '../../api/rest';

export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const INVALIDATE_USER = 'INVALIDATE_USER';

export function fetchUser (userId) {
  return function (dispatch, getState) {
    (async function () {
      dispatch(fetchUserBegin(userId));
      try {
        let user = await api.getUser(getState().authentication.authentication.jwt, userId);
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

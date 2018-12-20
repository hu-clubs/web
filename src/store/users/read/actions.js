import {userApi} from '../../../api';

export const FETCH_USER_DETAILS_BEGIN = 'FETCH_USER_DETAILS_BEGIN';
export const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS';
export const FETCH_USER_DETAILS_ERROR = 'FETCH_USER_DETAILS_ERROR';
export const INVALIDATE_USER_DETAILS = 'INVALIDATE_USER_DETAILS';

export function fetchUserDetails (userId) {
  return function (dispatch, getState) {
    let jwt = getState().authentication.jwt.token;
    (async function () {
      dispatch(fetchUserDetailsBegin(userId));
      try {
        let user = await userApi.readOne(jwt, userId);
        dispatch(fetchUserDetailsSuccess(userId, user));
      } catch (err) {
        dispatch(fetchUserDetailsError(userId, err));
      }
    })();
  };
}

export function fetchUserDetailsBegin (userId) {
  return {
    type: FETCH_USER_DETAILS_BEGIN,
    userId: userId
  };
}

export function fetchUserDetailsSuccess (userId, user) {
  return {
    type: FETCH_USER_DETAILS_SUCCESS,
    userId: userId,
    user: user,
    receivedAt: Date.now()
  };
}

export function fetchUserDetailsError (userId, error) {
  return {
    type: FETCH_USER_DETAILS_ERROR,
    userId: userId,
    error
  };
}

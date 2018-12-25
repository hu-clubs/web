import {userApi} from '../../../api';
import {getJwt} from '../../authentication/utils';
import {createFetchActions} from '../../util';

export const actions = createFetchActions('USER_DETAILS');

export function fetchUserDetails (userId) {
  return async function (dispatch, getState) {
    let jwt = getJwt(getState);
    dispatch(fetchUserDetailsBegin(userId));
    try {
      let user = await userApi.readOne(jwt, userId);
      dispatch(fetchUserDetailsSuccess(userId, user));
    } catch (err) {
      dispatch(fetchUserDetailsError(userId, err));
    }
  };
}

export function fetchUserDetailsBegin (userId) {
  return {
    type: actions.begin,
    userId: userId
  };
}

export function fetchUserDetailsSuccess (userId, user) {
  return {
    type: actions.success,
    userId: userId,
    user: user,
    receivedAt: Date.now()
  };
}

export function fetchUserDetailsError (userId, error) {
  return {
    type: actions.error,
    userId: userId,
    error
  };
}

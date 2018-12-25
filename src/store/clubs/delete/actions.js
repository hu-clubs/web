import {clubApi} from '../../../api';
import {getJwt} from '../../authentication/utils';

export const REQUEST_DELETE_CLUB_BEGIN = 'REQUEST_DELETE_CLUB_BEGIN';
export const REQUEST_DELETE_CLUB_SUCCESS = 'REQUEST_DELETE_CLUB_SUCCESS';
export const REQUEST_DELETE_CLUB_ERROR = 'REQUEST_DELETE_CLUB_ERROR';

export function requestDeleteClub (id) {
  return function (dispatch, getState) {
    let jwt = getJwt(getState);
    (async function () {
      dispatch(deleteClubBegin());
      try {
        await clubApi.delete(jwt, id);
        dispatch(deleteClubSuccess());
      } catch (err) {
        dispatch(deleteClubError(err));
      }
    })();
  };
}

export function deleteClubBegin () {
  return {
    type: REQUEST_DELETE_CLUB_BEGIN
  };
}

export function deleteClubSuccess () {
  return {
    type: REQUEST_DELETE_CLUB_SUCCESS
  };
}

export function deleteClubError (json) {
  return {
    type: REQUEST_DELETE_CLUB_ERROR,
    error: json
  };
}

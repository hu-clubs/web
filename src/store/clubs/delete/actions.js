import * as api from '../../../api/rest';

export const REQUEST_DELETE_CLUB_BEGIN = 'REQUEST_DELETE_CLUB_BEGIN';
export const REQUEST_DELETE_CLUB_SUCCESS = 'REQUEST_DELETE_CLUB_SUCCESS';
export const REQUEST_DELETE_CLUB_ERROR = 'REQUEST_DELETE_CLUB_ERROR';

export function requestDeleteClub (id) {
  return function (dispatch, getState) {
    let jwt = getState().authentication.jwt.token;
    (async function () {
      dispatch(deleteClubBegin());
      try {
        await api.club.requestDeleteClub(jwt, id);
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

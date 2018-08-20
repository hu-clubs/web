import * as api from '../../../api/rest';

export const REQUEST_UPDATE_CLUB_BEGIN = 'REQUEST_UPDATE_CLUB_BEGIN';
export const REQUEST_UPDATE_CLUB_SUCCESS = 'REQUEST_UPDATE_CLUB_SUCCESS';
export const REQUEST_UPDATE_CLUB_ERROR = 'REQUEST_UPDATE_CLUB_ERROR';

export function requestUpdateClub (club) {
  return function (dispatch, getState) {
    let jwt = getState().authentication.jwt.token;
    (async function () {
      dispatch(updateClubBegin());
      try {
        await api.club.requestUpdateClub(jwt, club);
        dispatch(updateClubSuccess());
      } catch (err) {
        dispatch(updateClubError(err));
      }
    })();
  };
}

export function updateClubBegin () {
  return {
    type: REQUEST_UPDATE_CLUB_BEGIN
  };
}

export function updateClubSuccess () {
  return {
    type: REQUEST_UPDATE_CLUB_SUCCESS
  };
}

export function updateClubError (error) {
  return {
    type: REQUEST_UPDATE_CLUB_ERROR,
    error
  };
}

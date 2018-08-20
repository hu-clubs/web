import * as api from '../../../api/rest';

export const REQUEST_UPDATE_CLUB_BEGIN = 'REQUEST_UPDATE_CLUB_BEGIN';
export const REQUEST_UPDATE_CLUB_SUCCESS = 'REQUEST_UPDATE_CLUB_SUCCESS';
export const REQUEST_UPDATE_CLUB_ERROR = 'REQUEST_UPDATE_CLUB_ERROR';

export function requestUpdateClub (club) {
  return function (dispatch, getState) {
    let jwt = getState().authentication.jwt.jwt;
    (async function () {
      dispatch(updateClubBegin());
      try {
        let json = await api.club.editClub(jwt, club);
        dispatch(updateClubSuccess(json));
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

export function updateClubError (json) {
  return {
    type: REQUEST_UPDATE_CLUB_ERROR,
    error: json
  };
}

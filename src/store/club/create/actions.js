import * as api from '../../../api/rest';

export const REQUEST_CREATE_CLUB_BEGIN = 'REQUEST_CREATE_CLUB_BEGIN';
export const REQUEST_CREATE_CLUB_SUCCESS = 'REQUEST_CREATE_CLUB_SUCCESS';
export const REQUEST_CREATE_CLUB_ERROR = 'REQUEST_CREATE_CLUB_ERROR';

export function requestCreateClub (name, shortName) {
  return function (dispatch, getState) {
    let jwt = getState().authentication.jwt.jwt;
    (async function () {
      dispatch(createClubBegin());
      try {
        let json = await api.club.createClub(jwt, name, shortName);
        dispatch(createClubSuccess(json));
      } catch (err) {
        dispatch(createClubError(err));
      }
    })();
  };
}

export function createClubBegin () {
  return {
    type: REQUEST_CREATE_CLUB_BEGIN
  };
}

export function createClubSuccess () {
  return {
    type: REQUEST_CREATE_CLUB_SUCCESS
  };
}

export function createClubError (json) {
  return {
    type: REQUEST_CREATE_CLUB_ERROR,
    error: json
  };
}

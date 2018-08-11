import * as api from '../../api/rest';

export const FETCH_CLUBS_BEGIN = 'FETCH_CLUBS_BEGIN';
export const FETCH_CLUBS_SUCCESS = 'FETCH_CLUBS_SUCCESS';
export const FETCH_CLUBS_ERROR = 'FETCH_CLUBS_ERROR';
export const INVALIDATE_CLUBS = 'INVALIDATE_CLUBS';

export const FETCH_CLUB_BEGIN = 'FETCH_CLUB_BEGIN';
export const FETCH_CLUB_SUCCESS = 'FETCH_CLUB_SUCCESS';
export const FETCH_CLUB_ERROR = 'FETCH_CLUB_ERROR';
export const INVALIDATE_CLUB = 'INVALIDATE_CLUB';

export function fetchClub (clubId) {
  return function (dispatch, getState) {
    (async function () {
      dispatch(fetchClubBegin(clubId));
      try {
        let club = await api.getClub(getState().authentication.authentication.jwt, clubId);
        dispatch(fetchClubSuccess(clubId, club));
      } catch (err) {
        dispatch(fetchClubError(clubId, err));
      }
    })();
  };
}

export function fetchClubBegin (clubId) {
  return {
    type: FETCH_CLUB_BEGIN,
    clubId: clubId
  };
}

export function fetchClubSuccess (clubId, json) {
  return {
    type: FETCH_CLUB_SUCCESS,
    clubId: clubId,
    club: json,
    receivedAt: Date.now()
  };
}

export function fetchClubError (clubId, json) {
  return {
    type: FETCH_CLUB_ERROR,
    clubId: clubId,
    error: json
  };
}

export function fetchClubs () {
  return function (dispatch, getState) {
    (async function () {
      dispatch(fetchClubsBegin());
      try {
        let clubs = await api.getClubs(getState().authentication.authentication.jwt);
        dispatch(fetchClubsSuccess(clubs));
      } catch (err) {
        dispatch(fetchClubsError(err));
      }
    })();
  };
}

export function fetchClubsBegin () {
  return {
    type: FETCH_CLUBS_BEGIN
  };
}

export function fetchClubsSuccess (json) {
  let clubs = {};
  for (let club of json) {
    clubs[club._id] = club;
  }
  return {
    type: FETCH_CLUBS_SUCCESS,
    clubs: clubs,
    receivedAt: Date.now()
  };
}

export function fetchClubsError (json) {
  return {
    type: FETCH_CLUBS_ERROR,
    error: json
  };
}

import * as api from '../../api/rest';

export const FETCH_CLUBS_BEGIN = 'FETCH_CLUBS_BEGIN';
export const FETCH_CLUBS_SUCCESS = 'FETCH_CLUBS_SUCCESS';
export const FETCH_CLUBS_ERROR = 'FETCH_CLUBS_ERROR';
export const INVALIDATE_CLUBS = 'INVALIDATE_CLUBS';

export const FETCH_CLUB_BEGIN = 'FETCH_CLUB_BEGIN';
export const FETCH_CLUB_SUCCESS = 'FETCH_CLUB_SUCCESS';
export const FETCH_CLUB_ERROR = 'FETCH_CLUB_ERROR';
export const INVALIDATE_CLUB = 'INVALIDATE_CLUB';

export const CREATE_CLUB_BEGIN = 'CREATE_CLUB_BEGIN';
export const CREATE_CLUB_SUCCESS = 'CREATE_CLUB_SUCCESS';
export const CREATE_CLUB_ERROR = 'CREATE_CLUB_ERROR';

export const DELETE_CLUB_BEGIN = 'DELETE_CLUB_BEGIN';
export const DELETE_CLUB_SUCCESS = 'DELETE_CLUB_SUCCESS';
export const DELETE_CLUB_ERROR = 'DELETE_CLUB_ERROR';

export function deleteClub (id) {
  return function (dispatch, getState) {
    (async function () {
      dispatch(deleteClubBegin());
      try {
        let json = await api.deleteClub(getState().authentication.jwt.jwt, id);
        dispatch(deleteClubSuccess(json));
      } catch (err) {
        dispatch(deleteClubError(err));
      }
    })();
  };
}

export function deleteClubBegin () {
  return {
    type: DELETE_CLUB_BEGIN
  };
}

export function deleteClubSuccess (json) {
  return {
    type: DELETE_CLUB_SUCCESS,
    jwt: json.token
  };
}

export function deleteClubError (json) {
  return {
    type: DELETE_CLUB_ERROR,
    error: json
  };
}

export function createClub (name, shortName) {
  return function (dispatch, getState) {
    (async function () {
      dispatch(createClubBegin());
      try {
        let json = await api.createClub(getState().authentication.jwt.jwt, name, shortName);
        dispatch(createClubSuccess(json));
      } catch (err) {
        dispatch(createClubError(err));
      }
    })();
  };
}

export function createClubBegin () {
  return {
    type: CREATE_CLUB_BEGIN
  };
}

export function createClubSuccess (json) {
  return {
    type: CREATE_CLUB_SUCCESS,
    jwt: json.token
  };
}

export function createClubError (json) {
  return {
    type: CREATE_CLUB_ERROR,
    error: json
  };
}

export function fetchClub (clubId) {
  return function (dispatch, getState) {
    (async function () {
      dispatch(fetchClubBegin(clubId));
      try {
        let club = await api.getClub(getState().authentication.jwt.jwt, clubId);
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
        let clubs = await api.getClubs(getState().authentication.jwt.jwt);
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

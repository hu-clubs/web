import * as api from '../../api/static';

export const FETCH_CLUBS_BEGIN = 'FETCH_CLUBS_BEGIN';
export const FETCH_CLUBS_SUCCESS = 'FETCH_CLUBS_SUCCESS';
export const FETCH_CLUBS_ERROR = 'FETCH_CLUBS_ERROR';

export const INVALIDATE_CLUBS = 'INVALIDATE_CLUBS';

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

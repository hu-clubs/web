import fetch from 'cross-fetch';

export const FETCH_CLUBS_BEGIN = 'FETCH_CLUBS_BEGIN';
export const FETCH_CLUBS_SUCCESS = 'FETCH_CLUBS_SUCCESS';
export const FETCH_CLUBS_ERROR = 'FETCH_CLUBS_ERROR';

export const INVALIDATE_CLUBS = 'INVALIDATE_CLUBS';

export function fetchClubs (jwt) {
  return function (dispatch) {
    (async function () {
      try {
        dispatch(fetchClubsBegin());
        let res = await fetch('http://localhost:8080/api/club', {
          credentials: 'include',
          headers: {
            'Authorization': jwt
          }
        });
        let json = await res.json();
        if (!res.ok) {
          console.log(res);
          console.log(json);
          dispatch(fetchClubsError({
            title: res.status + ' ' + res.statusText,
            message: json.error.name + ': ' + json.error.message
          }));
        } else {
          dispatch(fetchClubsSuccess(json));
        }
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

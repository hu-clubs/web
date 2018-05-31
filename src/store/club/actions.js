import fetch from 'cross-fetch';

export const FETCH_CLUBS_BEGIN = 'FETCH_CLUBS_BEGIN';
export const FETCH_CLUBS_SUCCESS = 'FETCH_CLUBS_SUCCESS';
export const FETCH_CLUBS_ERROR = 'FETCH_CLUBS_ERROR';

export const INVALIDATE_CLUBS = 'INVALIDATE_CLUBS';

// TODO get auth from redux
export function fetchClubs () {
  return function (dispatch) {
    dispatch(fetchClubsBegin());
    return fetch('http://localhost:8080/api/club', {
      credentials: 'include',
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWFkOGYyOGFjOTViZTc2ZTM4NWE3Y2VkIiwiaWF0IjoxNTI0MTkzNzYyLCJpc3MiOiJodS1jbHVicyJ9.b1jfa0ebpTAlaB7kYSMPsTlIujxXWwpVtKygp4tXcVA'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res);
        }
        return res;
      })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch(fetchClubsSuccess(json));
      })
      .catch(err => {
        dispatch(fetchClubsError(err));
      });
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

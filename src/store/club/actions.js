import fetch from 'cross-fetch';

export const REQUEST_CLUBS = 'REQUEST_CLUBS';
export const RECEIVE_CLUBS = 'RECEIVE_CLUBS';

export const INVALIDATE_CLUBS = 'INVALIDATE_CLUBS';

// TODO get auth from redux
export function fetchClubs () {
  return function (dispatch) {
    dispatch(requestClubs());
    return fetch('http://localhost:8080/api/club', {
      credentials: 'include',
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWFkOGYyOGFjOTViZTc2ZTM4NWE3Y2VkIiwiaWF0IjoxNTI0MTkzNzYyLCJpc3MiOiJodS1jbHVicyJ9.b1jfa0ebpTAlaB7kYSMPsTlIujxXWwpVtKygp4tXcVA'
      }
    })
      .then(res => res.json(), err => console.log(err))
      .then(json => {
        dispatch(receiveClubs(json));
      });
  };
}

export function requestClubs () {
  return {
    type: REQUEST_CLUBS
  };
}

export function receiveClubs (json) {
  let clubs = {};
  for (let club of json) {
    clubs[club._id] = club;
  }
  return {
    type: RECEIVE_CLUBS,
    clubs: clubs,
    receivedAt: Date.now()
  };
}

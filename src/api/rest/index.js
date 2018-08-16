import fetch from 'cross-fetch';

export async function createClub (jwt, name, shortName) {
  let res = await fetch('http://localhost:8080/api/clubs', {
    method: 'POST',
    headers: {
      'Authorization': jwt,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      shortName
    })
  });
  let json = await res.json();
  if (!res.ok) {
    let err = new Error();
    err.name = res.status + ' - ' + res.statusText;
    err.message = json.error.name + (json.error.message ? ': ' + json.error.message : '');
    throw err;
  }
  return json;
}

export async function getUser (jwt, userId) {
  let res = await fetch('http://localhost:8080/api/users/' + userId, {
    credentials: 'include',
    headers: {
      'Authorization': jwt
    }
  });
  let json = await res.json();
  if (!res.ok) {
    let err = new Error();
    err.name = res.status + ' - ' + res.statusText;
    err.message = json.error.name + (json.error.message ? ': ' + json.error.message : '');
    throw err;
  }
  return json;
}

export async function deleteClub (jwt, clubId) {
  let res = await fetch('http://localhost:8080/api/clubs/' + clubId, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Authorization': jwt
    }
  });
  let json = await res.json();
  if (!res.ok) {
    let err = new Error();
    err.name = res.status + ' - ' + res.statusText;
    err.message = json.error.name + (json.error.message ? ': ' + json.error.message : '');
    throw err;
  }
  return json;
}

export async function getClub (jwt, clubId) {
  let res = await fetch('http://localhost:8080/api/clubs/' + clubId, {
    credentials: 'include',
    headers: {
      'Authorization': jwt
    }
  });
  let json = await res.json();
  if (!res.ok) {
    let err = new Error();
    err.name = res.status + ' - ' + res.statusText;
    err.message = json.error.name + (json.error.message ? ': ' + json.error.message : '');
    throw err;
  }
  return json;
}

export async function getClubs (jwt) {
  let res = await fetch('http://localhost:8080/api/clubs', {
    credentials: 'include',
    headers: {
      'Authorization': jwt
    }
  });
  let json = await res.json();
  if (!res.ok) {
    let err = new Error();
    err.name = res.status + ' - ' + res.statusText;
    err.message = json.error.name + (json.error.message ? ': ' + json.error.message : '');
    throw err;
  }
  return json;
}

export async function login (email, password) {
  let res = await fetch('http://localhost:8080/api/users/authentication/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  let json = await res.json();
  if (!res.ok) {
    let err = new Error();
    err.name = res.status + ' - ' + res.statusText;
    err.message = json.error.name + (json.error.message ? ': ' + json.error.message : '');
    throw err;
  }
  return json;
}

export async function createUser (firstName, lastName, email, hNumber, password, register) {
  let res = await fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      hNumber,
      password,
      register
    })
  });
  let json = await res.json();
  if (!res.ok) {
    let err = new Error();
    err.name = res.status + ' - ' + res.statusText;
    err.message = json.error.name + (json.error.message ? ': ' + json.error.message : '');
    throw err;
  }
  return json;
}

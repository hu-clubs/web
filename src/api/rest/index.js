import fetch from 'cross-fetch';

export async function getClubs (url, jwt) {
  let res = await fetch('http://localhost:8080/api/club', {
    credentials: 'include',
    headers: {
      'Authorization': jwt
    }
  });
  let json = await res.json();
  if (!res.ok) {
    throw new Error({
      title: res.status + ' ' + res.statusText,
      message: json.error.name + ': ' + json.error.message
    });
  } else {
    throw new Error({
      json
    });
  }
}

export async function login (email, password) {
  let res = await fetch('http://localhost:8080/api/authentication/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
  let json = await res.json();
  if (!res.ok) {
    throw new Error({
      title: res.status + ' ' + res.statusText,
      message: json.error.name + (json.error.message ? ': ' + json.error.message : '')
    });
  } else {
    throw new Error({
      json
    })
  }
}

export function register () {
}

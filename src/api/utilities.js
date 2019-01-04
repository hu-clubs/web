import fetch from 'cross-fetch';

export const API_URL = process.env.REACT_APP_API_URL;

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

/**
 * Creates a request options object. Provides a nicer interface when using cross-fetch
 * @param options Options to pass in
 * @returns {{method: (*|string)}} A cross-fetch request options object
 */
function createRequest (options) {
  let request = {
    method: options.method || HTTP_METHODS.GET,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (options.jwt) {
    request = {
      ...request,
      headers: {
        ...request.headers,
        'Authorization': 'Bearer ' + options.jwt
      }
    };
  }

  if (options.body) {
    request = {
      ...request,
      body: JSON.stringify(options.body)
    };
  }

  return request;
}

/**
 * Processes a response object
 * @param res A cross-fetch response object
 * @returns {Promise<any>} The JSON response
 */
async function processResponse (res) {
  const json = await res.json();

  if (!res.ok) {
    let err = new Error();
    err.name = res.status + ' - ' + res.statusText;
    err.message = json.error.name + (json.error.message ? ': ' + json.error.message : '');
    throw err;
  } else {
    return json;
  }
}

/**
 * Creates a request and returns its response
 * @param path The URL to request
 * @param options Options for the request
 * @returns {Promise<any>} The JSON response
 */
async function fetchApi (path, options) {
  options = createRequest(options);
  const res = await fetch(API_URL + path, options);
  return processResponse(res);
}

export function getApi (path, options) {
  options.method = HTTP_METHODS.GET;
  return fetchApi(path, options);
}

export function postApi (path, options) {
  options.method = HTTP_METHODS.POST;
  return fetchApi(path, options);
}

export function patchApi (path, options) {
  options.method = HTTP_METHODS.PATCH;
  return fetchApi(path, options);
}

export function deleteApi (path, options) {
  options.method = HTTP_METHODS.DELETE;
  return fetchApi(path, options);
}

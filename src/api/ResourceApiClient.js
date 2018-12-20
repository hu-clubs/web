import {getApi, deleteApi, patchApi, postApi} from './utilities';

export class ResourceApiClient {
  url;

  constructor (url) {
    this.url = url;
  }

  create (jwt, attributes) {
    return postApi(this.url, {
      jwt,
      body: {
        ...attributes
      }
    });
  }

  readAll (jwt) {
    return getApi(this.url, {
      jwt
    });
  }

  readOne (jwt, id) {
    return getApi(this.url + '/' + id, {
      jwt
    });
  }

  update (jwt, resource) {
    return patchApi(this.url + '/' + resource._id, {
      jwt,
      body: {
        ...resource
      }
    });
  }

  delete (jwt, id) {
    return deleteApi(this.url + '/' + id, {
      jwt
    });
  }
}
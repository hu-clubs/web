import {RSAA} from 'redux-api-middleware';

/**
 * This method takes the name of an action and create types suitable for an RSAA action creator
 * @param action The name of the action that is being performed
 * @param resource The resource the action is being performed on
 * @returns {{success: string, error: string, begin: string}}
 */
export function createRsaaActionTypes (action, resource) {
  const identifier = action + '_' + resource;
  return {
    begin: 'FETCH_' + identifier + '_BEGIN',
    success: 'FETCH_' + identifier + '_SUCCESS',
    error: 'FETCH_' + identifier + '_ERROR'
  };
}

export function createCrudActionTypes (resource) {
  return {
    create: createRsaaActionTypes('CREATE', resource),
    fetchList: createRsaaActionTypes('READ_LIST', resource),
    fetchDetails: createRsaaActionTypes('READ_DETAILS', resource),
    update: createRsaaActionTypes('UPDATE', resource),
    delete: createRsaaActionTypes('DELETE', resource)
  };
}

export function actionTypesToRsaaArray (types) {
  return [types.begin, types.success, types.error];
}

export function createCrudActionCreators (resource, endpoint, actionTypes) {
  return {
    create: (attributes) => {
      return {
        [RSAA]: {
          endpoint,
          method: 'POST',
          body: {
            ...attributes
          },
          types: actionTypesToRsaaArray(actionTypes.create)
        }
      };
    },
    fetchList: () => {
      return {
        [RSAA]: {
          endpoint,
          method: 'GET',
          types: actionTypesToRsaaArray(actionTypes.fetchList)
        }
      };
    },
    fetchDetails: (id) => {
      return {
        [RSAA]: {
          endpoint: endpoint + id,
          method: 'GET',
          types: actionTypesToRsaaArray(actionTypes.fetchDetails)
        }
      };
    },
    update: (id, attributes) => {
      return {
        [RSAA]: {
          endpoint: endpoint + id,
          method: 'PATCH',
          body: {
            ...attributes
          },
          types: actionTypesToRsaaArray(actionTypes.update)
        }
      };
    },
    delete: (id) => {
      return {
        [RSAA]: {
          endpoint: endpoint + id,
          method: 'DELETE',
          types: actionTypesToRsaaArray(actionTypes.delete)
        }
      };
    }
  };
}

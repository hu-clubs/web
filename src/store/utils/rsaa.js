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

/**
 * This method takes an object with a begin, success, and error property and returns an array of those properties
 * @param types An object with a begin, success, and error property
 * @returns {*[]} An array of RSAA action types
 */
export function actionTypesToRsaaArray (types) {
  return [types.begin, types.success, types.error];
}

import {getJwt} from '../../authentication/utils';
import {createActions, createRSAA} from '../../../utils';

export const actions = createActions('CREATE_CLUB');

export function request (name, shortName) {
  return function (dispatch, getState) {
    let jwt = getJwt(getState());
    return createRSAA('/api/clubs', jwt, {
      method: 'POST',
      types: actions.fetchActions,
      body: {
        name,
        shortName
      }
    });
  };
}

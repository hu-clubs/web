import {actions} from './actions';
import {createRequestReducers} from '../../../utils';

const initialState = {
  isRequesting: false,
  error: false
};

const reducers = createRequestReducers();

export default function createClubReducer (state = initialState, action) {
  switch (action.type) {
    case actions.begin:
      reducers.begin();
      break;
    case actions.success:
      reducers.success();
      break;
    case actions.error:
      reducers.error(action);
      break;
    default:
      return state;
  }
}

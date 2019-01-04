import {combineReducers} from 'redux';
import createClubReducer from './create/reducers';
import deleteClubReducer from './delete/reducers';
import readClubReducer from './read/reducers';
import updateClubReducer from './update/reducers';

export const clubsReducer = combineReducers({
  create: createClubReducer,
  delete: deleteClubReducer,
  read: readClubReducer,
  update: updateClubReducer
});

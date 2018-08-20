import {combineReducers} from 'redux';
import {
  EDIT_CLUB_BEGIN,
  EDIT_CLUB_ERROR,
  EDIT_CLUB_SUCCESS
} from './actions';

export const clubReducer = combineReducers({
  list: clubListReducer,
  details: clubDetailsReducer,
  create: createClubReducer,
  delete: deleteClubReducer,
  edit: editClubReducer
});

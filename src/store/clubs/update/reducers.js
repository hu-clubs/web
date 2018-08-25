import {REQUEST_UPDATE_CLUB_BEGIN, REQUEST_UPDATE_CLUB_ERROR, REQUEST_UPDATE_CLUB_SUCCESS} from './actions';

let initialState = {
  isFetching: false,
  error: false
};

export default function updateClubReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_UPDATE_CLUB_BEGIN:
      return {
        isFetching: true,
        error: false
      };
    case REQUEST_UPDATE_CLUB_SUCCESS:
      return {
        isFetching: false,
        error: false
      };
    case REQUEST_UPDATE_CLUB_ERROR:
      return {
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

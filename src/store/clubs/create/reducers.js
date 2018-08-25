import {REQUEST_CREATE_CLUB_BEGIN, REQUEST_CREATE_CLUB_ERROR, REQUEST_CREATE_CLUB_SUCCESS} from './actions';

let initialState = {
  isRequesting: false,
  error: false
};

export default function createClubReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_CLUB_BEGIN:
      return {
        isRequesting: true,
        error: false
      };
    case REQUEST_CREATE_CLUB_SUCCESS:
      return {
        isRequesting: false,
        error: false
      };
    case REQUEST_CREATE_CLUB_ERROR:
      return {
        isRequesting: false,
        error: action.error
      };
    default:
      return state;
  }
}

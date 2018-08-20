import {REQUEST_DELETE_CLUB_BEGIN, REQUEST_DELETE_CLUB_ERROR, REQUEST_DELETE_CLUB_SUCCESS} from './actions';

let initialState = {
  isFetching: false,
  error: null
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_DELETE_CLUB_BEGIN:
      return {
        isFetching: true,
        error: null
      };
    case REQUEST_DELETE_CLUB_SUCCESS:
      return {
        isFetching: false,
        error: null
      };
    case REQUEST_DELETE_CLUB_ERROR:
      return {
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const FETCH_CLUB_LIST_BEGIN = 'FETCH_CLUB_LIST_BEGIN';
export const FETCH_CLUB_LIST_SUCCESS = 'FETCH_CLUB_LIST_SUCCESS';
export const FETCH_CLUB_LIST_ERROR = 'FETCH_CLUB_LIST_ERROR';
export const INVALIDATE_CLUB_LIST = 'INVALIDATE_CLUB_LIST';

let initialState = {
  isFetching: false,
  error: null
};

export function editClubReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_UPDATE_CLUB_BEGIN:
      return {
        isFetching: true,
        error: null
      };
    case REQUEST_UPDATE_CLUB_SUCCESS:
      return {
        isFetching: false,
        error: null
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

import {
  FETCH_CLUB_DETAILS_BEGIN,
  FETCH_CLUB_DETAILS_ERROR,
  FETCH_CLUB_DETAILS_SUCCESS,
  FETCH_CLUB_LIST_BEGIN,
  FETCH_CLUB_LIST_ERROR,
  FETCH_CLUB_LIST_SUCCESS,
  INVALIDATE_CLUB_DETAILS,
  INVALIDATE_CLUB_LIST
} from './actions';

let initialListState = {
  items: {},
  isFetching: false,
  error: null,
  lastUpdated: null,
  didInvalidate: false
};

export function reducer (state = initialListState, action) {
  let clubId = action.clubId;
  switch (action.type) {
    case INVALIDATE_CLUB_DETAILS:
      return {
        ...state,
        items: {
          ...state.items,
          [clubId]: {
            ...state.items[clubId],
            didInvalidate: true
          }
        }
      };
    case FETCH_CLUB_DETAILS_BEGIN:
      return {
        ...state,
        items: {
          ...state.items,
          [clubId]: {
            ...state.items[clubId],
            isFetching: true,
            didInvalidate: false,
            error: null
          }
        }
      };
    case FETCH_CLUB_DETAILS_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [clubId]: {
            ...state.items[clubId],
            isFetching: false,
            didInvalidate: false,
            data: action.club,
            lastUpdated: action.receivedAt,
            error: null
          }
        }
      };
    case FETCH_CLUB_DETAILS_ERROR:
      return {
        ...state,
        items: {
          ...state.items,
          [clubId]: {
            ...state.items[clubId],
            isFetching: false,
            didInvalidate: false,
            data: {},
            lastUpdated: action.receivedAt,
            error: action.error
          }
        }
      };
    case INVALIDATE_CLUB_LIST:
      return {
        ...state,
        didInvalidate: true
      };
    case FETCH_CLUB_LIST_BEGIN:
      return {
        ...state,
        isFetching: true,
        error: null,
        didInvalidate: false
      };
    case FETCH_CLUB_LIST_SUCCESS:
      return {
        ...state,
        items: action.clubs,
        isFetching: false,
        error: null,
        lastUpdated: action.receivedAt,
        didInvalidate: false
      };
    case FETCH_CLUB_LIST_ERROR:
      return {
        ...state,
        items: {},
        isFetching: false,
        error: action.error,
        lastUpdated: action.receivedAt,
        didInvalidate: false
      };
    default:
      return state;
  }
}

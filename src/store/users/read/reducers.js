import {
  FETCH_USER_DETAILS_BEGIN,
  FETCH_USER_DETAILS_ERROR,
  FETCH_USER_DETAILS_SUCCESS,
  INVALIDATE_USER_DETAILS
} from './actions';

let initialState = {
  items: {}
};

export default function readUserReducer (state = initialState, action) {
  let userId = action.userId;
  switch (action.type) {
    case INVALIDATE_USER_DETAILS:
      return {
        ...state,
        items: {
          ...state.items,
          [userId]: {
            ...state.items[userId],
            didInvalidate: true
          }
        }
      };
    case FETCH_USER_DETAILS_BEGIN:
      return {
        ...state,
        items: {
          ...state.items,
          [userId]: {
            ...state.items[userId],
            isFetching: true,
            error: null,
            didInvalidate: false
          }
        }
      };
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [userId]: {
            ...state.items[userId],
            data: action.user,
            isFetching: false,
            error: null,
            lastUpdated: action.receivedAt,
            didInvalidate: false
          }
        }
      };
    case FETCH_USER_DETAILS_ERROR:
      return {
        ...state,
        items: {
          ...state.items,
          [userId]: {
            ...state.items[userId],
            isFetching: false,
            error: action.error,
            lastUpdated: action.receivedAt,
            didInvalidate: false
          }
        }
      };
    default:
      return state;
  }
}

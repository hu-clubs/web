import {combineReducers} from 'redux';

import {FETCH_CLUBS_BEGIN, FETCH_CLUBS_ERROR, FETCH_CLUBS_SUCCESS, INVALIDATE_CLUBS} from './actions';

let initialState = {
  isFetching: false,
  didInvalidate: false,
  items: {},
  lastUpdated: null,
  error: {}
};

export function clubListReducer (state = initialState, action) {
  switch (action.type) {
    case INVALIDATE_CLUBS:
      return {
        ...state,
        didInvalidate: true
      };
    case FETCH_CLUBS_BEGIN:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        error: null
      };
    case FETCH_CLUBS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.clubs,
        lastUpdated: action.receivedAt,
        error: null
      };
    case FETCH_CLUBS_ERROR:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: {},
        lastUpdated: action.receivedAt,
        error: action.error
      };
    default:
      return state;
  }
}

export const clubReducer = combineReducers({
  list: clubListReducer
});

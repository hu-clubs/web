import {combineReducers} from 'redux';

import {REQUEST_CLUBS, RECEIVE_CLUBS, INVALIDATE_CLUBS} from './actions';

let initialState = {
  isFetching: false,
  didInvalidate: false,
  items: {}
};

export function clubListReducer (state = initialState, action) {
  switch (action.type) {
    case INVALIDATE_CLUBS:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_CLUBS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_CLUBS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.clubs,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

export const clubReducer = combineReducers({
  list: clubListReducer
});

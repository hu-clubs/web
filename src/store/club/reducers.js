import {combineReducers} from 'redux';

import {
  CREATE_CLUB_BEGIN,
  CREATE_CLUB_ERROR,
  CREATE_CLUB_SUCCESS, DELETE_CLUB_BEGIN, DELETE_CLUB_ERROR, DELETE_CLUB_SUCCESS,
  FETCH_CLUB_BEGIN,
  FETCH_CLUB_ERROR,
  FETCH_CLUB_SUCCESS,
  FETCH_CLUBS_BEGIN,
  FETCH_CLUBS_ERROR,
  FETCH_CLUBS_SUCCESS,
  INVALIDATE_CLUB,
  INVALIDATE_CLUBS
} from './actions';

let initialDeleteState = {
  isFetching: false,
  error: null
};

let initialCreateState = {
  isFetching: false,
  error: null
};

let initialDetailsState = {
  items: {}
};

let initialListState = {
  isFetching: false,
  didInvalidate: false,
  items: {},
  lastUpdated: null,
  error: null
};

export function deleteClubReducer (state = initialDeleteState, action) {
  switch (action.type) {
    case DELETE_CLUB_BEGIN:
      return {
        isFetching: true,
        error: {}
      };
    case DELETE_CLUB_SUCCESS:
      return {
        isFetching: false,
        error: {}
      };
    case DELETE_CLUB_ERROR:
      return {
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function createClubReducer (state = initialCreateState, action) {
  switch (action.type) {
    case CREATE_CLUB_BEGIN:
      return {
        isFetching: true,
        error: {}
      };
    case CREATE_CLUB_SUCCESS:
      return {
        isFetching: false,
        error: {}
      };
    case CREATE_CLUB_ERROR:
      return {
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function clubDetailsReducer (state = initialDetailsState, action) {
  let clubId = action.clubId;
  switch (action.type) {
    case INVALIDATE_CLUB:
      let newState = Object.assign({}, state);
      newState.items[clubId] = {
        didInvalidate: true
      };
      return newState;
    case FETCH_CLUB_BEGIN:
      newState = Object.assign({}, state);
      newState.items[clubId] = {
        isFetching: true,
        didInvalidate: false,
        error: null
      };
      return newState;
    case FETCH_CLUB_SUCCESS:
      newState = Object.assign({}, state);
      newState.items[clubId] = {
        isFetching: false,
        didInvalidate: false,
        data: action.club,
        lastUpdated: action.receivedAt,
        error: null
      };
      return newState;
    case FETCH_CLUB_ERROR:
      newState = Object.assign({}, state);
      newState.items[clubId] = {
        isFetching: false,
        didInvalidate: false,
        data: {},
        lastUpdated: action.receivedAt,
        error: action.error
      };
      return newState;
    default:
      return state;
  }
}

export function clubListReducer (state = initialListState, action) {
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
  list: clubListReducer,
  details: clubDetailsReducer,
  create: createClubReducer,
  delete: deleteClubReducer
});

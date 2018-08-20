import {combineReducers} from 'redux';

import {
  CREATE_USER_BEGIN,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  FETCH_USER_BEGIN,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  INVALIDATE_USER
} from './actions';

let initialCreateUserState = {
  isFetching: false,
  error: null
};

let initialDetailsState = {
  items: {}
};

export function createUserReducer (state = initialCreateUserState, action) {
  switch (action.type) {
    case CREATE_USER_BEGIN:
      return {
        isFetching: true,
        error: null
      };
    case CREATE_USER_SUCCESS:
      return {
        isFetching: false,
        error: null
      };
    case CREATE_USER_ERROR:
      return {
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function userDetailsReducer (state = initialDetailsState, action) {
  let userId = action.userId;
  switch (action.type) {
    case INVALIDATE_USER:
      let newState = Object.assign({}, state);
      newState.items[userId] = {
        didInvalidate: true
      };
      return newState;
    case FETCH_USER_BEGIN:
      newState = Object.assign({}, state);
      newState.items[userId] = {
        isFetching: true,
        didInvalidate: false,
        error: null
      };
      return newState;
    case FETCH_USER_SUCCESS:
      newState = Object.assign({}, state);
      newState.items[userId] = {
        isFetching: false,
        didInvalidate: false,
        data: action.user,
        lastUpdated: action.receivedAt,
        error: null
      };
      return newState;
    case FETCH_USER_ERROR:
      newState = Object.assign({}, state);
      newState.items[userId] = {
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

export const userReducer = combineReducers({
  details: userDetailsReducer,
  create: createUserReducer
});
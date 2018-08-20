import {REQUEST_CREATE_USER_BEGIN, REQUEST_CREATE_USER_ERROR, REQUEST_CREATE_USER_SUCCESS} from './actions';

let initialState = {
  isFetching: false,
  error: null
};

export default function createUserReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_USER_BEGIN:
      return {
        isFetching: true,
        error: null
      };
    case REQUEST_CREATE_USER_SUCCESS:
      return {
        isFetching: false,
        error: null
      };
    case REQUEST_CREATE_USER_ERROR:
      return {
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

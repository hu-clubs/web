import {REQUEST_CREATE_USER_BEGIN, REQUEST_CREATE_USER_ERROR, REQUEST_CREATE_USER_SUCCESS} from './actions';

let initialState = {
  isRequesting: false,
  error: false
};

export default function createUserReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_USER_BEGIN:
      return {
        isRequesting: true,
        error: false
      };
    case REQUEST_CREATE_USER_SUCCESS:
      return {
        isRequesting: false,
        error: false
      };
    case REQUEST_CREATE_USER_ERROR:
      return {
        isRequesting: false,
        error: action.error
      };
    default:
      return state;
  }
}

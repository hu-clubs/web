import {REQUEST_LOGIN_BEGIN, REQUEST_LOGIN_ERROR, REQUEST_LOGIN_SUCCESS} from './actions';

const initialState = {
  isFetching: false,
  error: null
};

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN_BEGIN:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null
      };
    case REQUEST_LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

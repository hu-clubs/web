import { actions } from './actions';

let initialState = {
  items: {}
};

export default function readUserReducer (state = initialState, action) {
  let userId = action.userId;
  switch (action.type) {
    case actions.invalidate:
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
    case actions.begin:
      return {
        ...state,
        items: {
          ...state.items,
          [userId]: {
            ...state.items[userId],
            isFetching: true,
            error: false,
            didInvalidate: false
          }
        }
      };
    case actions.success:
      return {
        ...state,
        items: {
          ...state.items,
          [userId]: {
            ...state.items[userId],
            data: action.user,
            isFetching: false,
            error: false,
            lastUpdated: action.receivedAt,
            didInvalidate: false
          }
        }
      };
    case actions.error:
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

export function createCrudReducers (actions) {
  return {
    create: createRsaaReducer(actions.create),
    read: createReadReducer(actions.fetchList, actions.fetchDetails),
    update: createRsaaReducer(actions.update),
    delete: createRsaaReducer(actions.delete)
  };
}

function createReadReducer (fetchListActions, fetchDetailsActions) {
  const initialState = {
    isFetching: false,
    error: null,
    items: {}
  };
  return (state = initialState, action) => {
    switch (action) {
      case fetchListActions.begin:
        return {
          ...state,
          isFetching: true,
          error: null
        };
      case fetchListActions.success:
        const response = action.payload;
        const items = response.reduce((list, entry) => {
          list[entry._id] = {
            data: entry
          };
          return list;
        }, {});
        return {
          ...state,
          items,
          isFetching: false,
          error: null
        };
      case fetchListActions.error:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case fetchDetailsActions.begin:
        return {
          ...state,
          items: {
            ...state.items,
            [action.id]: {
              ...state.items[action.id],
              isFetching: true,
              error: null
            }
          }
        };
      case fetchDetailsActions.success:
        return {
          ...state,
          items: {
            ...state.items,
            [action.id]: {
              ...state.items[action.id],
              data: action.payload,
              isFetching: false,
              error: null
            }
          }
        };
      case fetchDetailsActions.error:
        return {
          ...state,
          items: {
            ...state.items,
            [action.id]: {
              ...state.items[action.id],
              isFetching: false,
              error: action.payload
            }
          }
        };
      default:
        return state;
    }
  };
}

const rsaaInitialState = {
  isFetching: false,
  error: null
};

// This is a reducer who only tracks RSAA request status
export function createRsaaReducer (actions) {
  return (state = rsaaInitialState, action) => {
    switch (action) {
      case actions.begin:
        return {
          ...state,
          isFetching: true,
          error: null
        };
      case actions.success:
        return {
          ...state,
          isFetching: false,
          error: null
        };
      case actions.error:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
}

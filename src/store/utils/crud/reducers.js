export function createCrudReducerInitialStates () {
  return {
    read: {
      isFetching: false,
      error: null,
      items: {}
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

// TODO split this method up
export function createCrudReducers (actions) {
  const initialStates = createCrudReducerInitialStates();
  return {
    create: createRsaaReducer(actions.create),
    read: (state = initialStates.read, action) => {
      switch (action) {
        case actions.fetchList.begin:
          return {
            ...state,
            isFetching: true,
            error: null
          };
        case actions.fetchList.success:
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
        case actions.fetchList.error:
          return {
            ...state,
            isFetching: false,
            error: action.payload
          };
        case actions.fetchDetails.begin:
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
        case actions.fetchDetails.success:
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
        case actions.fetchDetails.error:
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
    },
    update: createRsaaReducer(actions.update),
    delete: createRsaaReducer(actions.delete)
  };
}

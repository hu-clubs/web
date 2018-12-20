export function createRequestActionCreators (requestFn, resourceName, actionName) {
  const actions = createRequestActions(resourceName, actionName);
  const beginFn = () => {
    return {
      type: actions.begin
    };
  };
  const successFn = () => {
    return {
      type: actions.success
    };
  };
  const errorFn = (err) => {
    return {
      type: actions.error,
      error: err
    };
  };
  return (attributes) => {
    return function (dispatch, getState) {
      let jwt = getState().authentication.jwt.token;
      (async function () {
        dispatch(beginFn());
        try {
          await requestFn(jwt, attributes);
          dispatch(successFn());
        } catch (err) {
          dispatch(errorFn(err));
        }
      })();
    };
  };
}

export function createRequestActions (resourceName, actionName) {
  return {
    begin: 'REQUEST_' + actionName + '_' + resourceName + '_BEGIN',
    error: 'REQUEST_' + actionName + '_' + resourceName + '_ERROR',
    success: 'REQUEST_' + actionName + '_' + resourceName + '_SUCCESS'
  };
}

let requestInitialState = {
  isRequesting: false,
  error: false
};

export function createRequestReducer (beginAction, successAction, errorAction) {
  return function requestReducer (state = requestInitialState, action) {
    switch (action.type) {
      case beginAction:
        return {
          isRequesting: true,
          error: false
        };
      case successAction:
        return {
          isRequesting: false,
          error: false
        };
      case errorAction:
        return {
          isRequesting: false,
          error: action.error
        };
      default:
        return state;
    }
  };
}

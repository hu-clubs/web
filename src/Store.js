const Redux = require('redux');

// Note that using .push() in this way isn't the
// best approach. It's just the easiest to show
// for this example. We'll explain why in the next section.

// The Reducer Function
let clubListReducer = function (state = {}, action) {
  if (!state.clubs) {
    state.clubs = [];
  }
  if (action.type === 'ADD_CLUB') {
    state = state.clubs.concat(action.club);
  }
  return state;
};

// Create a store by passing in the reducer
export let store = Redux.createStore(clubListReducer);

// Dispatch our first action to express an intent to change the state
store.dispatch({
  type: 'ADD_CLUB',
  club: {
    name: 'Dan'
  }
});

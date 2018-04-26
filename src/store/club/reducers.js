import {SET_CLUBS, SET_CLUB} from './actions';

// TODO implement reducer composition
const initialState = {
  clubs: {
    clubs: {}
  }
};

// TODO implement reducer composition
export function clubs (state, action) {
  if (state === undefined) {
    return initialState;
  } else if (state.clubs === undefined) {
    return {
      ...state,
      initialState
    };
  }

  switch (action.type) {
    case SET_CLUBS:
      let clubs = {};
      for (let club of action.clubs) {
        clubs[club.id] = club;
      }
      return {
        ...state,
        clubs: {
          clubs: clubs
        }
      };
    case SET_CLUB:
      return {
        ...state,
        clubs: {
          clubs: {
            [action.club.id]: action.club
          }
        }
      };
    default:
      return state;
  }
}

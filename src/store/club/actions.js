export const SET_CLUBS = 'SET_CLUBS';
export const SET_CLUB = 'SET_CLUB';

export function setClubs (clubs) {
  return {
    type: SET_CLUBS,
    clubs: clubs
  };
}

export function setClub (club) {
  return {
    type: SET_CLUB,
    club: club
  };
}

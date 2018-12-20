import * as club from './features/ClubApiClient';
import * as user from './features/UserApiClient';
import * as authentication from './features/AuthenticationApi';

export const clubApi = club.ClubApiClient;
export const userApi = user.UserApiClient;
export const authenticationApi = authentication;

import {ResourceApiClient} from '../ResourceApiClient';

const USERS_URL = '/api/users';

export const UserApiClient = new ResourceApiClient(USERS_URL);

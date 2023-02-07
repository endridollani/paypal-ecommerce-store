import { UserModelType } from '../../types/User';

export enum Users {
  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERRORED = 'FETCH_USERS_ERRORED',
}
export interface UsersState {
  data: {
    totaItems: number;
    items: Array<UserModelType>;
    totalPages: number;
    currentPage: number;
  };
  loading: boolean;
  loaded: boolean;
  errored: boolean;
  error: any;
}

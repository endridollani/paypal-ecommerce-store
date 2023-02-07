import { Reducer } from 'react';
import { Action } from 'redux';
import { Users, UsersState } from './types';

const initialState: UsersState = {
  data: {
    totaItems: 0,
    items: [],
    totalPages: 0,
    currentPage: 0,
  },
  loading: false,
  loaded: false,
  errored: false,
  error: null,
};
const UsersReducer: Reducer<UsersState, Action> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case Users.FETCH_USERS_START:
      state = { ...state, loading: true };
      break;
    case Users.FETCH_USERS_SUCCESS:
      state = { ...state, loading: false, loaded: true, data: action.payload };
      break;
    case Users.FETCH_USERS_ERRORED:
      state = {
        ...state,
        loading: false,
        loaded: false,
        errored: true,
        error: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export { UsersReducer };

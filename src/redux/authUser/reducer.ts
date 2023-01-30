import { Reducer } from 'react';
import { AuthActionTypes, UserAuthDataType } from './types';

const initialState: UserAuthDataType = {
  data: null,
  error: null,
  loading: false,
};

const authReducer: Reducer<any, any> = (state = initialState, action: any) => {
  switch (action.type) {
    case AuthActionTypes.ON_LOGIN:
      state = {
        ...state,
        error: null,
        loading: true,
      };
      break;
    case AuthActionTypes.ON_REGISTER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case AuthActionTypes.ACTION_COMPLETED:
      state = {
        ...state,
        data: action.data,
        error: null,
        loading: false,
      };
      break;
    case AuthActionTypes.GET_USER:
      state = { ...state };
      break;
    case AuthActionTypes.ACTION_FAILED:
      state = {
        ...state,
        data: null,
        error: action.error,
        loading: false,
      };
      break;
    case AuthActionTypes.ON_LOGOUT:
      state = {
        ...state,
        data: null,
        error: null,
        loading: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export { authReducer };

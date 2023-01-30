import { AuthActionTypes } from './types';

export const onLogin = (userCredentials: any) => ({
  type: AuthActionTypes.ON_LOGIN,
  user: userCredentials,
});

export const onRegister = (userCredentials: any) => ({
  type: AuthActionTypes.ON_REGISTER,
  user: userCredentials,
});

export const onLogout = () => ({
  type: AuthActionTypes.ON_LOGOUT,
});

export const getAuthUser = () => ({
  type: AuthActionTypes.GET_USER,
});

export const actionFailed = (error: any) => ({
  type: AuthActionTypes.ACTION_FAILED,
  error,
});
export const actionCompleted = (data: any) => ({
  type: AuthActionTypes.ACTION_COMPLETED,
  data,
});

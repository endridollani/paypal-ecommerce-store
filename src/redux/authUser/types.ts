export enum AuthActionTypes {
  ON_LOGIN = '@@authUser/ON_LOGIN',
  ON_REGISTER = '@@authUser/ON_REGISTER',
  ON_LOGOUT = '@@authUser/ON_LOGOUT',
  ACTION_COMPLETED = '@@authUser/ACTION_COMPLETED',
  ACTION_FAILED = '@@authUser/ACTION_FAILED',
  GET_USER = '@@authUser/GET_USER',
}

export interface RolesType {
  name: string;
}

export interface UserDataType {
  user_id: number;
  user_name: string;
  user_surname: string;
  user_email: string;
  user_type: string;
}
export interface ErrorType {
  message: string;
}

export interface UserAuthDataType {
  [x: string]: any;
  data: UserDataType | null;
  error: ErrorType | null;
  loading: boolean;
}

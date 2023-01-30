import { UserAuthDataType } from '../redux/authUser/types';
import { AUTH_ROLES } from '../types/Auth';

export const isAdmin = (authState: UserAuthDataType) => {
  const role = authState?.data?.user_type ?? '';
  return role === AUTH_ROLES.ADMIN;
};

export const isUser = (authState: UserAuthDataType) => {
  const role = authState?.data?.user_type ?? '';
  return role === AUTH_ROLES.USER;
};

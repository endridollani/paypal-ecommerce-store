import { RcFile } from 'antd/lib/upload';
import { UserAuthDataType } from '../redux/authUser/types';
import { AUTH_ROLES } from '../types/Auth';

export const isAdmin = (authState: UserAuthDataType) => {
  const role = authState?.data?.user_type;
  return role === AUTH_ROLES.ADMIN;
};

export const isUser = (authState: UserAuthDataType) => {
  const role = authState?.data?.user_type ?? '';
  return role === AUTH_ROLES.USER;
};
export const clearLocalStorage = () => {
  localStorage.clear();
};
export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const prepereFile = async (file: RcFile): Promise<string> =>
  getBase64(file).then((base64) => base64.split(',')[1]);

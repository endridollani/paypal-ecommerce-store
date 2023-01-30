import { IS_LOGGEDIN, USER_ROLE } from '../utils/constants';
import agent from './agent';

export const register = async (values: any) =>
  agent.post('/auth/register', values);

export const login = async (values: any) => agent.post('/auth/login', values);

export const logOut = async () => {
  localStorage.removeItem(IS_LOGGEDIN);
  localStorage.removeItem(USER_ROLE);
  window.location.replace('/login');
};

export const getAuthUser = async () => agent.get('user/info');

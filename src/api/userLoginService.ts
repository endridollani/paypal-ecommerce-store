import { LoginType } from '../types/Login';
import agent from './agent';

export const login = (payload: LoginType) =>
  agent.post('/auth/login/', payload);

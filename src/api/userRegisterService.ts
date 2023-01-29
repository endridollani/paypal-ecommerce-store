import { RegisterType } from '../types/Register';
import agent from './agent';

export const register = (payload: RegisterType) =>
  agent.post('/auth/register', payload);

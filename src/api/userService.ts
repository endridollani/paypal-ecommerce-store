import { UserUpdate } from '../types/User';
import agent from './agent';

export const getAllUsers = () => agent.get('/user/all');

export const updateUser = (values: UserUpdate) =>
  agent.patch('/user/info', values);

import agent from './agent';

export const getAllUsers = () => agent.get('/user/all');

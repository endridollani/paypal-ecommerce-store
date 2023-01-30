import axios from 'axios';
import { REACT_APP_BASE_URL } from '../utils/constants';

const agent = axios.create({
  baseURL: REACT_APP_BASE_URL,
  withCredentials: true,
});

export default agent;

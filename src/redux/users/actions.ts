import { Dispatch } from 'redux';
import { getAllUsers } from '../../api/userService';
import { Users } from './types';

export const fetchUsers = () => (dispatch: Dispatch) => {
  dispatch({
    type: Users.FETCH_USERS_START,
  });
  getAllUsers()
    .then((response) => {
      dispatch({
        type: Users.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: Users.FETCH_USERS_ERRORED,
        payload: error,
      });
    });
};

import { takeLatest, put, call } from 'redux-saga/effects';
import { getAuthUser, login, register } from '../../api/authService';
import { IS_LOGGEDIN, USER, USER_ID, USER_ROLE } from '../../utils/constants';
import { isUser } from '../../utils/utilFunctions';

import * as actions from './actions';
import { AuthActionTypes, UserAuthDataType } from './types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: any;
  statusText?: string;
}

function* onLogin(payload: any) {
  const userCredentials = payload.user;
  try {
    const response: ResponseGenerator = yield call(login, userCredentials);
    if (response) {
      const {
        data: { user },
      } = response;

      if (isUser({ data: user } as UserAuthDataType)) {
        if (!user?.user_id) {
          yield put(actions.actionFailed(user));
          localStorage.removeItem(USER);
          localStorage.removeItem(IS_LOGGEDIN);
          localStorage.removeItem(USER_ROLE);
          localStorage.removeItem(USER_ID);
        }
      }
      yield put(actions.actionCompleted(user));
      localStorage.setItem(IS_LOGGEDIN, String(true));
      localStorage.setItem(USER_ROLE, user?.user_type);
      localStorage.setItem(USER_ID, user?.user_id);
    }
  } catch (error) {
    yield put(actions.actionFailed('Invalid credentials. Please try again.'));
  }
}

function* onGetUser() {
  try {
    const response: ResponseGenerator = yield call(getAuthUser);
    const { data: userData } = response;
    yield put(actions.actionCompleted(userData));
  } catch (error) {
    yield put(actions.actionFailed(error));
  }
}

function* onRegister(payload: any) {
  const userCredentials = payload.user;
  try {
    const {
      data: { user },
    } = yield call(register, userCredentials);
    if (user) {
      yield put(actions.actionCompleted(user));
    }
  } catch (error) {
    yield put(actions.actionFailed(error));
  }
}

export default function* AuthSaga() {
  yield takeLatest(AuthActionTypes.ON_LOGIN, onLogin);
  yield takeLatest(AuthActionTypes.ON_REGISTER, onRegister);
  yield takeLatest(AuthActionTypes.GET_USER, onGetUser);
}
